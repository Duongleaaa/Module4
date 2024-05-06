import React, { useState } from 'react'
import Hw4Child from './Hw4Child';

export default function Hw4Parents() {
    let [myName,setMyName] = useState<string>('Duong');
  return (
    <div> 
        Họ và tên bên Cpn cha: {myName}
        <Hw4Child name4 = {myName}></Hw4Child>
    </div>
  )
}
