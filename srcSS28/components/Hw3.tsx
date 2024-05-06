import React, { useState } from 'react'
//tạo interface
interface InfoHw3{
    id:number;
    name:string;
    age:number;
}
export default function Hw3() {
    //sử dụng useState với kiểu dữ liệu là một mảng
    let [Info3,setInfo3] = useState<InfoHw3[]>([
        {id:1,name:'john',age:30},
        {id:2,name:'Mary',age:25},
        {id:3,name:'jane',age:20},
    ]);

  return (
    <div>
<table>
<tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
</tr>
{Info3.map((e)=>{
    return(
    <tr key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.age}</td>
    </tr>
    )
})}
</table>

    </div>
  )
}

