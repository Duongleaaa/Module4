import { useState } from "react"

export default function H7() {
    const [arr, setArr] = useState<number[]>([])

    const addElement = () => {
        setArr([...arr, arr.length + 1])

    }
    return (
        <div>
            <h2>Home work 7:</h2>
            <p>Mảng số: [{arr.join(', ')}]</p>
            <button onClick={addElement}>Add Element</button>
        </div>
    )
}
