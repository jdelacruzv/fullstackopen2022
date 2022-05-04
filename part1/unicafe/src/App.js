import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

	const total = good + neutral + bad;	
  const average = good ? (good - bad) / total: 0;
	const positive = good ? (good / total) * 100 : 0;
	
	return (
		<div>
			<h1>Give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="Good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="Bad" />
			<h2>Statistics</h2>
			<div>Good: {good}</div>
			<div>Neutral: {neutral}</div>
			<div>Bad: {bad}</div>
			<div>All: {total}</div>
			<div>Average: {average}</div>
			<div>Positive: {positive} %</div>
		</div>
	);
};

export default App;
