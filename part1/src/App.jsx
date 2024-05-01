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

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const ButtonHandlerPassing = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                THe app is used by pressing the buttons
            </div>
        )
    }
    return(
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
    const [value, setValue] = useState(10)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(left + updatedRight)
    }

    const hello = (who) => () => {
            console.log('hello', who)
    }

    const setToValue = (newValue) => () => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='left'/>
            <Button handleClick={handleRightClick} text='right'/>
            {right}
            <button onClick={() => setValue(0)}>reset to zero</button>
            {value}
            <p>{allClicks.join(' ')}</p>
            <History allClicks={allClicks}/>

            <div>
                {value}
                <button onClick={hello('world')}>Hello, world</button>
                <button onClick={hello('react')}>Hello, react</button>
                <button onClick={hello('function')}>Hello, function</button>
            </div>

            <div>
                {value}
                <button onClick={setToValue(1000)}>Set to thousand</button>
                <button onClick={setToValue(0)}>Reset value to 0</button>
                <button onClick={setToValue(value + 1)}>Increment value</button>
            </div>

            <div>
                {value}
                <ButtonHandlerPassing handleClick={() => setToValue(1000)} text="Set thousand" />
                <ButtonHandlerPassing handleClick={() => setToValue(0)} text="Reset to 0" />
                <ButtonHandlerPassing handleClick={() => setToValue(value + 1)} text="Increment" />
            </div>
        </div>
    )
}

export default App