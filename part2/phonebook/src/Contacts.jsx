const Contact = ({ name, number }) => {
    return (
        <p>
            {name} - {number}
        </p>
    );
};
export const Contacts = ({ persons, filter }) => {
    const loweredFilter = filter.toLowerCase();
    const filtered =
        filter == ""
            ? persons
            : persons.filter((person) =>
                  person.name.toLowerCase().includes(loweredFilter)
              );
    return (
        <>
            <h2>Numbers</h2>
            {filtered.map((person) => (
                <Contact
                    key={person.name}
                    name={person.name}
                    number={person.number}
                />
            ))}
        </>
    );
};
