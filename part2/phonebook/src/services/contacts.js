import axios from "axios";
const url = "http://localhost:3001/persons";

const getAllContacts = () => {
	const request = axios.get(url);
	return request.then(response => response.data);
};

const createContact = (newContact) => {
	const request = axios.post(url, newContact);
	return request.then(response => response.data);
};

const updateContact = (id, newContact) => {
	return axios
		.put(`${url}/${id}`, newContact)
		.then(response => response.data);
};

const deleteContact = (id) => {
	const request = axios.delete(`${url}/${id}`);
	return request.then((response) => response.data);
};

const contactService = { 
	getAllContacts, 
	createContact, 
	updateContact,
	deleteContact 
};

export default contactService;


