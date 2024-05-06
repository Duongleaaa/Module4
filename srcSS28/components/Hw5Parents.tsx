import React from 'react'
import Hw5Child from './Hw5Child'

export default function () {
    // tao mot prop 
    let product5 = {
        id:1,
        productName:'Bưởi ba roi',
        price:'12.000 đ',
        quantity:6,
    }
  return (
    <div>
        <Hw5Child info5={product5}></Hw5Child>
    </div>
  )
}