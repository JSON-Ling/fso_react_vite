import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT') {
        return count + 1
    }
    else if (action.type === 'DECREMENT') {
        return count - 1
    }
    else if (action.type === 'ZERO') {
        return 0
    }

    return count
}

const store = createStore(counterReducer)

const App = () => {
    return (
        <div>
            <div>
                {store.getState()}
            </div>
            <button
                onClick={e => store.dispatch({ type: 'INCREMENT' })}
            >
                Plus
            </button>

            <button
                onClick={e => store.dispatch({ type: 'DECREMENT' })}
            >
                Minus
            </button>

            <button
                onClick={e => store.dispatch({ type: 'ZERO' })}
            >
                Reset to zero
            </button>


        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
    root.render(<App/>)
}

renderApp()
store.subscribe(renderApp)