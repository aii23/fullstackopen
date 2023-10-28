import { useState } from "react";

const InputForm = ({ addPerson }) => {
    const [newName, setNewName] = useState("");

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const onContactSubmit = (event) => {
        event.preventDefault();
        addPerson({
            name: newName,
        });
        setNewName("");
    };

    return (
        <>
            <form onSubmit={onContactSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
};

const Contact = ({ name }) => {
    return <p>{name}</p>;
};

const Contacts = ({ persons }) => {
    return (
        <>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <Contact key={person.name} name={person.name} />
            ))}
        </>
    );
};

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
    ]);

    const addPerson = (person) => {
        setPersons(persons.concat(person));
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <InputForm addPerson={addPerson} />
            <Contacts persons={persons} />
        </div>
    );
};

export default App;
