import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import { InputForm } from "./InputForm";
import { Contacts } from "./Contacts";
import { Filter } from "./Filter";

import "./index.css";

const Notification = ({ cssClass, message }) => {
    if (message === null) {
        return null;
    }

    return <div className={cssClass}>{message}</div>;
};

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filter, setFilter] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        phonebookService.getAll().then((data) => setPersons(data));
    }, []);

    const popMessage = (value) => {
        setMessage(value);
        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const popError = (value) => {
        setError(value);
        setTimeout(() => {
            setError(null);
        }, 5000);
    };

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

                        popMessage(`Updated ${newPerson.name}`);
                    })
                    .catch((error) => {
                        console.log(error);
                        popError("Contact is already removed");
                        setPersons(
                            persons.filter(
                                (person) => person.id != existingPerson.id
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
                    popMessage(`Added ${newPerson.name}`);
                });
        }
    };

    const removePerson = (id) => {
        return phonebookService
            .removeContact(id)
            .then(() => {
                setPersons(persons.filter((person) => person.id != id));
                popMessage(`Removed contact with id ${id}`);
            })
            .catch((error) => {
                console.log(error);
                popError("Contact is already removed");
                setPersons(persons.filter((person) => person.id != id));
            });
    };

    return (
        <div>
            <Notification cssClass="notification" message={message} />
            <Notification cssClass="notification error" message={error} />
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
