import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contactService from "./services/contacts"

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

	useEffect(() => {
		contactService
			.getAllContacts()
			.then(initialContacts => {
				setPersons(initialContacts);
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

  const newContact = {
		name: newName,
    number: newNumber,
    id: persons.length + 1
	};

	const createName = () => {
    persons.find(person => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
			: contactService
					.createContact(newContact)
					.then(returnedContact => {
						setPersons(persons.concat(returnedContact))
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
			<Filter filter={filter} handleChange={handleFilterChange} />
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