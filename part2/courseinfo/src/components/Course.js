import Content from "./Content";
import Header from "./Header";

const Course = (props) => {
	return (
		<>
			<Header course={props.course} />
			<Content parts={props.course.parts} />
		</>
	);
};

export default Course;