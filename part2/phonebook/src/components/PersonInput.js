const PersonInput = ({ text, newInput, handleChange }) => {
	return (
		<div>
			{text}: 
			<input type="text" value={newInput} onChange={handleChange} />
		</div>
	);
};

export default PersonInput;