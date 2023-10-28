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
        const existingPerson = persons.find(
            (person) => person.name == newPerson.name
        );
        if (existingPerson) {
            if (
                window.confirm(
                    `Do you want to change phone for ${existingPerson.name} contract?`
                )
            ) {
                existingPerson.number = newPerson.number;
                return phonebookService
                    .updateContact(existingPerson)
                    .then((returnedPerson) => {
                        setPersons(
                            persons.map((person) =>
                                person.id == returnedPerson.id
                                    ? returnedPerson
                                    : person
                            )
                        );
                    });
            } else {
                return Promise.resolve();
            }
        } else {
            return phonebookService
                .addContact(newPerson)
                .then((returnedPerson) => {
                    setPersons(persons.concat(returnedPerson));
                });
        }
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
