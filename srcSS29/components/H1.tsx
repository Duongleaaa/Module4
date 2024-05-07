import React from 'react'

export default function H1() {
    let handleClick = ()=>{
        console.log('Clicked');
    }
  return (
    <>
        <h2>Home work 1:</h2>
        <button onClick={handleClick}>Click Me</button>
    </>
  )
}
