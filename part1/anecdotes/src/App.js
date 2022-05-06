import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
];

const points = Array(anecdotes.length).fill(0);

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;

const Title = ({ text }) => <h2>{text}</h2>;

const AnecdoteText = ({ text }) => <div>{text}</div>;

const Vote = ({ vote }) => <div>has {vote} votes</div>;

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);

  const randomAnecdotes = () => {
    const num = Math.floor(Math.random() * anecdotes.length);
    setSelected(num);
  };

  const storeVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const numberVote = () => Math.max(...votes);

  const mostVotedAnecdote = () => {
    const index = votes.indexOf(numberVote());
    return anecdotes[index];
  };

  return (
		<div>
      <Title text="Anecdote of the day" />
			<AnecdoteText text={anecdotes[selected]} />
			<Vote vote={votes[selected]} />
			<Button handleClick={() => storeVotes()} text="votes" />
			<Button handleClick={() => randomAnecdotes()} text="next anecdote" />
			<Title text="Anecdote with most votes" />
			<AnecdoteText text={mostVotedAnecdote()} />
      <Vote vote={numberVote()} />
		</div>
	);
}

export default App;
