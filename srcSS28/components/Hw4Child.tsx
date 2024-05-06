import React from 'react'
interface Prop4{
    name4:string;
}
export default function Hw4Child(prop4:Prop4) {
    let {name4} = prop4;

  return (
    <div>
       Họ và tên bên Cpn con:{name4}
    </div>
  )
}
