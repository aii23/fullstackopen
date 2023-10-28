import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import { InputForm } from "./InputForm";
import { Contacts } from "./Contacts";
import { Filter } from "./Filter";

const App = () => {
    const [persons, setPersons] = useState([]);

    const [filter, setFilter] = useState("");

    useEffect(() => {
        phonebookService.getAll().then((data) => setPersons(data));
    }, []);

    const addPerson = (newPerson) => {
        if (persons.some((person) => person.name == newPerson.name)) {
            throw "Duplicate";
        }

        return phonebookService.addContact(newPerson).then((returnedPerson) => {
            setPersons(persons.concat(returnedPerson));
        });
    };

    const removePerson = (id) => {
        return phonebookService.removeContact(id).then(() => {
            setPersons(persons.filter((person) => person.id != id));
        });
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter filter={filter} setFilter={setFilter} />
            <h2>Enter new contact</h2>
            <InputForm addPerson={addPerson} />
            <Contacts
                persons={persons}
                filter={filter}
                removePerson={removePerson}
            />
        </div>
    );
};

export default App;
