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

    debugger

    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='left'/>
            <Button handleClick={handleRightClick} text='right'/>
            {right}
            <p>{allClicks.join(' ')}</p>
            <History allClicks={allClicks} />
        </div>
    )
}

export default App