import {useState} from "react";

const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </>
    )
}

const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseOne = () => setCounter(counter + 1)
    const resetZero = () => setCounter(0)
    const decreaseOne = () => setCounter(counter - 1)

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseOne} text='plus'/>
            <Button onClick={decreaseOne} text='minus' />
            <Button onClick={resetZero} text='reset' />
        </div>
    )
}

export default App