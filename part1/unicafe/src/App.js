import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = (props) => <div>{props.text}: {props.value}</div>;

const Statistics = (props) => { 	
	if (!props.all) return <p>No feedback give</p>;

	return (
		<div>
			<StatisticLine text="Good" value={props.good} />
			<StatisticLine text="Neutral" value={props.neutral} />
			<StatisticLine text="Bad" value={props.bad} />
			<StatisticLine text="All" value={props.all} />
			<StatisticLine text="Average" value={props.average} />
			<StatisticLine text="Positive" value={props.positive} />
		</div>
	);
};

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
			<h2>Statistics</h2>
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
