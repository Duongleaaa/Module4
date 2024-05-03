import React from 'react';



export default function Hw6() {
    interface User {
        firstName: string;
        lastName: string;
      }
    let formatName = (user:User)=>{
        return `${user.firstName} ${user.lastName}`
    }
    const user:User = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
      }
    
  return (
    <>
    <h2>Bài 6:</h2>
    <h3>Họ và tên: {formatName(user)} </h3>
    </>
  )
}




