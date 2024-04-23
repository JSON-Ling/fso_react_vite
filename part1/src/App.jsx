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

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onUse, text}) => {
    return (
        <button onClick={onUse}>
            {text}
        </button>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)

    const increaseOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }
    const resetZero = () => {
        console.log('resetting value to zero, value before', counter)
        setCounter(0)
    }
    const decreaseOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1)
    }

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