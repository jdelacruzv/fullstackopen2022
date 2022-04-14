const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
	<p>
		{props.title} <b>{props.number}</b>
	</p>
);

const Content = (props) => {
	return (
		<div>
			<Part title={props.part1} number={props.exer1} />
			<Part title={props.part2} number={props.exer2} />
			<Part title={props.part3} number={props.exer3} />
		</div>
	);
};

const Total = (props) => (
	<p>
		Number of exercises <b>{props.exer1 + props.exer2 + props.exer3}</b>
	</p>
);

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				part1={part1}
				exer1={exercises1}
				part2={part2}
				exer2={exercises2}
				part3={part3}
				exer3={exercises3}
			/>
			<Total exer1={exercises1} exer2={exercises2} exer3={exercises3} />
		</div>
	);
};

export default App;
