import React from 'react'
interface User {
    userList: {
      id: number;
      name: string;
      address: string;
      email: string;
    }[];
  }
export default function Hw6Child(props:User) {
    let {userList} = props;
  return (
    <div>
        {userList.map((e)=>{
            return(
                <div>
                <p>ID:{e.id}</p>
                <p>NAME:{e.name}</p>
                <p>ADDRESS:{e.address}</p>
                <p>EMAIL:{e.email}</p>
                <hr />
                </div>
            )
        })}
    </div>
  )
}
