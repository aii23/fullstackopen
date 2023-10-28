import { useState } from "react";
import { InputForm } from "./InputForm";
import { Contacts } from "./Contacts";
import { Filter } from "./Filter";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
    ]);

    const [filter, setFilter] = useState("");

    const addPerson = (newPerson) => {
        if (persons.some((person) => person.name == newPerson.name)) {
            return false;
        }
        setPersons(persons.concat(newPerson));
        return true;
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter filter={filter} setFilter={setFilter} />
            <h2>Enter new contact</h2>
            <InputForm addPerson={addPerson} />
            <Contacts persons={persons} filter={filter} />
        </div>
    );
};

export default App;
