import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contactService from "./services/contacts"

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
	const [errorMessage, setErrorMessage] = useState({
		text: "",
		color: "transparent"
	});

	useEffect(() => {
		contactService
			.getAllContacts()
			.then(initialContacts => {
				setPersons(initialContacts);
			})
			.catch(error => {
				console.log("Error getAllContacts: ", error);
			});
	}, []);

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

	const handleErrorMessage = (text, color) => {
		setErrorMessage({
			text: text,
			color: color,
		});
		setTimeout(() => {
			setErrorMessage({
				text: "",
				color: "transparent",
			});
		}, 3000);
	};

	const newContact = {
		name: newName,
		number: newNumber,
		id: persons.length + 1,
	};

	const updateName = (record, newNumber) => {
		const { name, id } = record;
		alert(`${name} is already added to phonebook, replace the old number with a new one?`)
		const changedPerson = {
			...record,
			number: newNumber
		};
		contactService
			.updateContact(id, changedPerson)
			.then(returnedContact => {
				setPersons(persons.map(person =>
					person.id !== id ? person : returnedContact
				));
				handleErrorMessage(`${newContact.name} successfully updated`, "green");
			})
			.catch(error => {
				console.log("Error updateContact: ", error);
				handleErrorMessage(`Contact ${newContact.name} was not updated`, "red");
			});
	};

	const createName = () => {
    const record = persons.find(person => person.name === newName);		
		record
			? updateName(record, newNumber)
			: contactService
					.createContact(newContact)
					.then(returnedContact => {
						setPersons(persons.concat(returnedContact));
						handleErrorMessage(`${newContact.name} successfully created`, "green");
					})
					.catch(error => {
						console.log("Error createContact: ", error);
						handleErrorMessage(`Contact ${newContact.name} was not created`, "red");
					});
  };

	const addName = (event) => {
		event.preventDefault();
    createName();		
		setNewName("");
		setNewNumber("");
	};

	const deleteName = (id) => {
		const person = persons.find(p => p.id === id);
		window.confirm(`Delete ${person.name} ?`)
		contactService
			.deleteContact(id)
			.then(() => {
				setPersons(persons.filter(p => p.id !== person.id));
				handleErrorMessage(`${person.name} successfully deleted`, "green");
			})
			.catch(error => {
				console.log("Error deteleContact: ", error);
				handleErrorMessage(`Contact ${person.name} was not deleted`, "red");
			});
	};

	const filterPersons = filter
		? persons.filter((person) =>
				person.name.toLowerCase().startsWith(filter.toLowerCase())
			)		  
		: persons;

  return (
		<div>
			<h2>Phonebook</h2>
			<Notification 
				message={errorMessage.text} 
				color={errorMessage.color} 
			/>
			<Filter 
				filter={filter} 
				handleChange={handleFilterChange} 
			/>
			<h2>add a new</h2>
			<PersonForm
				addName={addName}
				newName={newName}
				newNumber={newNumber}
				handleChangeName={handleNameChange}
				handleChangeNumber={handleNumberChange}
			/>
			<h2>Numbers</h2>
			{filterPersons.map(person => (
				<Persons
					key={person.id}
					person={person}
					deleteName={() => deleteName(person.id)}
				/>
			))}
		</div>
	);
}

export default App;