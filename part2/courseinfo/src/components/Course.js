import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ courses }) => {
	return (
		<>
			<h1>Web development curriculum</h1>
			{courses.map((course) => (
				<div key={course.id}>
					<Header name={course.name} />
					<Content parts={course.parts} />
					<Total parts={course.parts} />
				</div>
			))}
		</>
	);
};

export default Course;