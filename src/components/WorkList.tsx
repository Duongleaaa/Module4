import React from 'react'

export default function WorkList() {
  return (
    <>
      <ul style={{display:'flex', flexDirection:'column',gap:'10px'}}>
        <li style={{
            listStyle:'none',
            display:'flex',
            justifyContent:'space-between'
        }}>
          <input type="checkbox" />
          <span>Home work</span>
          <div >
            <button style={{marginRight:'10px'}}>Up</button>
            <button>Del</button>
          </div>

          </li>
        <li style={{
            listStyle:'none',
            display:'flex',
            justifyContent:'space-between'
        }}>
          <input type="checkbox" />
          <span>Home work</span>
          <div >
            <button style={{marginRight:'10px'}}>Up</button>
            <button>Del</button>
          </div>

          </li>
        <li style={{
            listStyle:'none',
            display:'flex',
            justifyContent:'space-between'
        }}>
          <input type="checkbox" />
          <span>Home work</span>
          <div >
            <button style={{marginRight:'10px'}}>Up</button>
            <button>Del</button>
          </div>

          </li>
      </ul>
    </>
  )
}
