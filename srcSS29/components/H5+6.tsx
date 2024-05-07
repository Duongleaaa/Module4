import React, { useState } from "react"

export default function H5() {
    let [hideShow,setHideShow] = useState<boolean>(true);
    let count:number = 0;
    let handleClick = (e:React.MouseEvent)=>{
        
    }

    return (
        <>
            <h2>Home work 5+6:</h2>
            <p>True : <button onClick={handleClick}>{
            }</button></p>
        </>
    )
}
