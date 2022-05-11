import Part from "./Part";

const Content = ({ parts }) => {
	return parts.map(({ id, name, exercises }) => (
		<Part key={id} title={name} number={exercises} />
	));
};

export default Content;
