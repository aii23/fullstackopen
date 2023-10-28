import { useState } from "react";

export const InputForm = ({ addPerson }) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const handleInputUpdate = (setter) => (event) => {
        setter(event.target.value);
    };

    const onContactSubmit = (event) => {
        event.preventDefault();
        if (
            addPerson({
                name: newName,
                number: newNumber,
            })
        ) {
            setNewName("");
            setNewNumber("");
        } else {
            alert(`Contact with name ${newName} already exists`);
        }
    };

    return (
        <>
            <form onSubmit={onContactSubmit}>
                <div>
                    name:{" "}
                    <input
                        value={newName}
                        onChange={handleInputUpdate(setNewName)}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleInputUpdate(setNewNumber)}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
};
