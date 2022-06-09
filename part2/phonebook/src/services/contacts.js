import axios from "axios";
const url = "http://localhost:3001/persons";

const getAllContacts = () => {
	const request = axios.get(url);
	return request.then(response => response.data);
};

const createContact = (newObject) => {
	const request = axios.post(url, newObject);
	return request.then(response => response.data);
};

const deleteContact = (id) => {
	const request = axios.delete(`${url}/${id}`);
	return request.then((response) => response.data);
};

const contactService = { 
	getAllContacts, 
	createContact, 
	deleteContact 
};

export default contactService;


