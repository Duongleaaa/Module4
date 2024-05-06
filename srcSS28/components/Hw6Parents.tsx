import React from 'react'
import Hw6Child from './Hw6Child';
class User6Cl{
    id:number;
    name:string;
    address:string;
    email:string;
    constructor(id:number,name:string,address:string,email:string) {
        this.id = id;
        this.name = name;
        this.address =address;
        this.email = email;
    }
}
export default function () {
    let users6:User6Cl[] = [
        new User6Cl(1,'john','HN','john@gmail.com'),
        new User6Cl(2,'linda','HP','linda@gmail.com'),
    ]
  return (
    <div>
        <Hw6Child userList={users6}></Hw6Child>
    </div>
  )
}
