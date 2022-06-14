const Notification = ({ message, color }) => {
	const styleMsg = {
		display: message === "" ? "none" : "block",
		color: color,
		backgroundColor: color === "transparent" ? color : "lightgrey",
		fontSize: 20,
		border: `3px solid ${color}`,
		borderRadius: 5,
		padding: 10,
		marginBottom: 15,
	};

	if (message === null) return null;

	return (
		<div style={styleMsg}>
			{message}
		</div>
	);
};

export default Notification;