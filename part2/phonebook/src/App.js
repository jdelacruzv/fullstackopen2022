import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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

  const nameObject = {
		name: newName,
    number: newNumber,
    id: persons.length + 1
	};

	const searchName = () => {
    persons.find(person => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(nameObject));
  }; 

	const addName = (event) => {
		event.preventDefault();
    searchName();
		setNewName("");
    setNewNumber("");
	};
	
  return (
		<div>
			<h2>Phonebook</h2>
      <div>
				filter show with: <input type="text" value={filter} onChange={handleFilterChange} />
			</div>
      <h2>add a new</h2>
			<form onSubmit={addName}>
				<div>
					Name: <input type="text" value={newName} onChange={handleNameChange} />
				</div>
        <div>
					Number: <input type="text" value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
      {filterPersons.map(person => (
				<div key={person.id}>{person.name} {person.number}</div>
			))}
		</div>
	);
}

export default App;
