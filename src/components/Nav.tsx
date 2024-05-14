import React from 'react'
import ChooseList from './ChooseList'
import Cart from './Cart'

export default function Nav() {
  return (
    <>
      <nav style={{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'orange',
        alignItems:"center",
        padding:'20px 30px'
      }}>
        <ChooseList></ChooseList>
        <Cart></Cart>
      </nav>
    </>
  )
}
