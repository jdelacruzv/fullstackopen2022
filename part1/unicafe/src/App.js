import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>:</td>
		<td>{value}</td>
	</tr>
);

const Statistics = ({ good, neutral, bad, all, average, positive, porcen }) => { 	
	if (!all) return <p>No feedback give</p>;

	return (
		<table>
			<tbody>
				<StatisticLine text="Good" value={good} />
				<StatisticLine text="Neutral" value={neutral} />
				<StatisticLine text="Bad" value={bad} />
				<StatisticLine text="All" value={all} />
				<StatisticLine text="Average" value={average} />
				<StatisticLine text="Positive" value={`${positive} ${porcen}`} />
			</tbody>
		</table>
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
				porcen="%"
			/>
		</div>
	);
};

export default App;
