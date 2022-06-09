import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons"

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

	useEffect(() => {
		personService
			.getAll()
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

  const filterPersons = filter 
    ? persons.filter(person => 
      person.name.toLowerCase().startsWith(filter.toLowerCase()))
    : persons;

  const newObject = {
		name: newName,
    number: newNumber,
    id: persons.length + 1
	};

	const searchName = () => {
    persons.find(person => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newObject));
  }; 

	const addName = (event) => {
		event.preventDefault();
    searchName();

		personService
			.create(newObject)
			.then(returnedContact => {
				console.log(returnedContact);
			});

		setNewName("");
    setNewNumber("");
	};
	
  return (
		<div>
			<h2>Phonebook</h2>
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
			<Persons filterPersons={filterPersons} />
		</div>
	);
}

export default App;
