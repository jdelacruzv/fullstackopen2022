import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

  const nameObject = {
		name: newName,
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
	};
	
  return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					Name:
					<input type="text" value={newName} onChange={handleNameChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<div key={person.name}>{person.name}</div>
			))}
		</div>
	);
}

export default App;
