import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () => {
	const request = axios.get(url);
	return request.then(response => response.data);
};

const create = (newObject) => {
	const request = axios.post(url, newObject);
	return request.then(response => response.data);
};

const personService = { getAll, create };

export default personService;

