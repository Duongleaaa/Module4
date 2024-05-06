
import React ,{useState} from 'react'
console.log(React);
export default function StateF() {
    let [number,setNumber] = useState<number>(0);
    //khi dùng useState bắt buộc phải khai báo kiểu dữ liếu
    let [fullName,setFullName] = useState<string>('minh thu')
    // hàm useState trả về 1 mảng bên trong có 2 giá trị
    // 1 là gt 1, 2 là một hàm xử lí
    

    //khai báo hàm handle
    //khi muốn cập nhật state thì dùng set 
    let handleClick = ()=>{
        setNumber(number +1)
    }
  return (
    <div>StateF
{/* react ra đời 2013
trước đó trong function không quản lí state được mà chỉ quản lí state được ở bên trong class

10/2018 : hook ra đời bổ sung cho function có thể quản lí state được useState;

*/}
<p>giá trị number ban đầu = {number}</p>
<button onClick={handleClick}>add</button>
<p>giá trị fullName  = {fullName}</p>
    </div>
  )
}

