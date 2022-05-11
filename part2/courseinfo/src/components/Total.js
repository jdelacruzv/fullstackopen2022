const Total = ({ parts }) => {
	// It was done in step 7
	const total = parts.reduce((a, b) => a + b.exercises, 0);
	return (
		<p>
			<b>Total of {total} exercises</b>
		</p>
	);
};

export default Total;