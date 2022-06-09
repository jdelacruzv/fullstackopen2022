const Persons = ({ person, deleteName }) => {
	return (
		<div>
			{person.name} {" "} || Tel: {person.number} {" "} 
			<button onClick={deleteName}>delete</button>
		</div>
	);
};

export default Persons;
