import { useState } from "react";
function Counter() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    return (
        <div className="box-button">


            <button className="button" onClick={() => setCounter(counter + 1)} > {counter}likes</button>
            <button className="button" onClick={() => setCounter2(counter2 + 1)} > {counter2}likes</button>
        </div>
    )
}

export default Counter; 