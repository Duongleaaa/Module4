import React from 'react'

export default function Funtional() {
    /*cách khai báo kiểu dữ liệu và hiển thị chúng */
    type Obj = {
        name:string,
        age:number,
    }
    let fullname:string = 'minh thu';
    let age:number = 20;
    let myArr:string[] = ['hoa','hong','gai','vip'];

    let newStudent:Obj = {
        name:'phuong',
        age: 18
    }
  return (
    <>
    Functional___________________________________________________
    <p>Xin chào {fullname}</p>
    <p>Năm nay {fullname} {age} tuổi!</p>
    <ul>
        {myArr.map((e,i)=>{
            return <li key={i}>{e}</li>
        })}
    </ul>
    {/* hiển thị obj */}
        <p>{JSON.stringify(newStudent)}</p>
    </>
  )
}
