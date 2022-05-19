import PersonInput from "./PersonInput";

const PersonForm = ({
	addName,
	newName,
	newNumber,
	handleChangeName,
	handleChangeNumber,
}) => {
	return (
		<form onSubmit={addName}>
			<PersonInput text="Name" newInput={newName} handleChange={handleChangeName} />
			<PersonInput text="Number" newInput={newNumber} handleChange={handleChangeNumber} />
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
