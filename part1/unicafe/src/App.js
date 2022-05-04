import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistics = (props) => (
	<div>
		<h2>Statistics</h2>
		<div>Good: {props.good}</div>
		<div>Neutral: {props.neutral}</div>
		<div>Bad: {props.bad}</div>
		<div>All: {props.all}</div>
		<div>Average: {props.average}</div>
		<div>Positive: {props.positive} %</div>
	</div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

	const all = good + neutral + bad;	
  const average = good ? (good - bad) / all: 0;
	const positive = good ? (good / all) * 100 : 0; 
	
	return (
		<div>
			<h1>Give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="Good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="Bad" />
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={all}
				average={average}
				positive={positive}
			/>
		</div>
	);
};

export default App;
