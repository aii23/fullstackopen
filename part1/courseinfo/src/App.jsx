const Header = (props) => {
    return (
        <>
            <h1> {props.course} </h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.exNum}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].name} exNum={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exNum={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exNum={props.parts[2].exercises}/>
        </>
    )
}

const Total = (props) => {
    console.log()
    return (
        <>
            <p>Number of exercises {props.excercises[0] + props.excercises[1] + props.excercises[2]}</p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

    return (
        <>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total excercises={course.parts.map((part) => part.exercises)}/>
        </>
    )
}

export default App
