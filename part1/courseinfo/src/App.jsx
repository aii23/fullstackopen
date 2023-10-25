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
            <Part part={props.parts[0]} exNum={props.nums[0]}/>
            <Part part={props.parts[1]} exNum={props.nums[1]}/>
            <Part part={props.parts[2]} exNum={props.nums[2]}/>
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
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const parts = [part1, part2, part3]
    const exercises = [exercises1, exercises2, exercises3]

    return (
        <>
            <Header course={course}/>
            <Content parts={parts} nums={exercises}/>
            <Total excercises={exercises}/>
        </>
    )
}

export default App
