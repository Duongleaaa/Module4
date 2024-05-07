import React, { useState } from 'react'

export default function H2() {
    let [value,setValue] = useState<string>('');
    let handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        //lấy giá trị của event.
        console.log(event.target.value);
        setValue(event.target.value);
    }
  return (
    <>
        <h2>Home work 2:</h2>
        <h3>Dữ liệu người dùng nhập: {value}</h3>
        <input type="text" onChange={handleChange} />
    </>
  )
}
