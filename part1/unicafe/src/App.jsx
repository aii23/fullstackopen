import { useState } from "react";

const Header = () => {
    return (
        <>
            <h1>Give feedback</h1>
        </>
    );
};

const Buttons = (props) => {
    return (
        <>
            {props.buttons.map((button) => (
                <button onClick={button.handler}>{button.name}</button>
            ))}
        </>
    );
};

const StatisticsLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    );
};

const Statistics = (props) => {
    const allCount = props.goodCount + props.neturalCount + props.badCount;

    if (allCount == 0) {
        return <p> No feedback provided </p>;
    }

    const average = (props.goodCount - props.badCount) / allCount;
    const positive = ((props.goodCount / allCount) * 100).toFixed(2);

    return (
        <table>
            <StatisticsLine text="good" value={props.goodCount} />
            <StatisticsLine text="netural" value={props.neturalCount} />
            <StatisticsLine text="bad" value={props.badCount} />
            <StatisticsLine text="all" value={allCount} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={positive + "%"} />
        </table>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const buttons = [
        {
            name: "good",
            handler: () => setGood(good + 1),
        },
        {
            name: "netural",
            handler: () => setNeutral(neutral + 1),
        },
        {
            name: "bad",
            handler: () => setBad(bad + 1),
        },
    ];

    return (
        <div>
            <Header></Header>
            <Buttons buttons={buttons}></Buttons>
            <Statistics
                goodCount={good}
                neturalCount={neutral}
                badCount={bad}
            ></Statistics>
        </div>
    );
};

export default App;
