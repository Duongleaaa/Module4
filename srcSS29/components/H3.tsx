import { useState } from "react"

export default function H3() {
    let [date,setDate] = useState<any>()
    const changeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }
    return (
        <div>
            <h2>Home work 3:</h2>
            <label htmlFor="">Thời gian: {date} </label>
            <label htmlFor=""></label> <br />
            <input type="date" onChange={changeDays} />
            <hr />
        </div>
    )
}
