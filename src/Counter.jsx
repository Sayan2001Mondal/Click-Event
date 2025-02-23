import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    } 

    const reset = () => {
        setCount(count * 0);
    }

    return( 
        <div className = "counter-container" >
            <p className="count-display"> {count}</p>
            <button className="counter-button-red" onClick={decrement}>Decrement</button>
            <button className="counter-button-white" onClick={reset}>Reset</button>
            <button className="counter-button-green" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter