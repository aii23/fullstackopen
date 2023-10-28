import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl).then((response) => response.data);
};

const addContact = (contact) => {
    return axios.post(`${baseUrl}`, contact).then((response) => response.data);
};

const updateContact = (contact) => {
    console.log("Update contact", contact);
    return axios
        .put(`${baseUrl}/${contact.id}`, contact)
        .then((response) => response.data);
};

const removeContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { getAll, addContact, updateContact, removeContact };
