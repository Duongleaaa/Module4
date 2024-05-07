import { useState } from "react";

export default function H8() {
    const [count, setCount] = useState(0)
    const countClick = () => {
        setCount(count + 1)
        console.log(count);
    }
    return (
        <div>
            <h2>Home work 8:</h2>
            <button onClick={countClick}>Clicked {count} </button>
        </div>
    )
}
