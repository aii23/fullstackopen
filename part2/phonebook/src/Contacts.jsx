const Contact = ({ name, number, handleContactRemove }) => {
    return (
        <p>
            {name} - {number}
            <button onClick={handleContactRemove}> X </button>
        </p>
    );
};
export const Contacts = ({ persons, filter, removePerson }) => {
    const loweredFilter = filter.toLowerCase();
    const filtered =
        filter == ""
            ? persons
            : persons.filter((person) =>
                  person.name.toLowerCase().includes(loweredFilter)
              );

    const handleContactRemove = (id) => (event) => {
        event.preventDefault();

        return removePerson(id).catch((error) => console.log(error));
    };

    return (
        <>
            <h2>Numbers</h2>
            {filtered.map((person) => (
                <Contact
                    key={person.id}
                    name={person.name}
                    number={person.number}
                    handleContactRemove={handleContactRemove(person.id)}
                />
            ))}
        </>
    );
};
