const Header = (props) => {
    return (
        <>
            <h1> {props.course} </h1>
        </>
    );
};

const Part = ({ name, exNum }) => {
    return (
        <>
            <p>
                {name} {exNum}
            </p>
        </>
    );
};

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} name={part.name} exNum={part.exercises} />
            ))}
        </>
    );
};

const Total = ({ excercises }) => {
    return (
        <>
            <b>Number of exercises {excercises}</b>
        </>
    );
};

const Course = ({ name, parts }) => {
    return (
        <>
            <Header course={name} />
            <Content parts={parts} />
            <Total
                excercises={parts
                    .map((part) => part.exercises)
                    .reduce((acc, val) => acc + val)}
            />
        </>
    );
};

export const Courses = ({ courses }) => {
    return (
        <>
            {courses.map((course) => (
                <Course
                    key={course.id}
                    name={course.name}
                    parts={course.parts}
                />
            ))}
        </>
    );
};
