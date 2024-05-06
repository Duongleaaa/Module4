import React from 'react'
interface Props {
    nameF:string;
    students:string[];
}
export default function Functional(props:Props) {
    console.log(props);
    //có thể dùng destructoring
    const {nameF} = props;
    const {students} = props;
  return (
    <>
    Functional {nameF}
    {/* hiển thị danh sách sinh viên */}
    <ul>
    {students.map((e,i)=>{
        return <li key={i}>{e}</li>
    })}

    </ul>
    
    </>
    
  )
}
