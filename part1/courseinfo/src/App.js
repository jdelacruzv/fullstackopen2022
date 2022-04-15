const Header = (props) => <h1>{props.course.name}</h1>;

const Part = (props) => <p>{props.title} <b>{props.number}</b></p>;

const Content = (props) => {
	return (
		<div>
			<Part title={props.parts[0].name} number={props.parts[0].exercises} />
			<Part title={props.parts[1].name} number={props.parts[1].exercises} />
			<Part title={props.parts[2].name} number={props.parts[2].exercises} />
		</div>
	);
}; 

const Total = (props) => {
	const total = props.parts.reduce((a, b) => a + b.exercises, 0);	
	return <p>Number of exercises <b>{total}</b></p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
