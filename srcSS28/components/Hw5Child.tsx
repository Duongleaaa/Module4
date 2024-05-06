import React from 'react'
//khai báo interface hứng cha
interface ProductHw5{
    info5:{
        id:number,
        productName:string,
        price:string,
        quantity:number,
    };
}
export default function Hw5Child(prop5:ProductHw5) {
    let {info5} = prop5;
    // let result5 = JSON.stringify(info5); nếu muốn hiển thị chuỗi thì phải chuyển Json
  return (
    <div>
        <h2>Dữ liệu trong Cpn con:</h2>
        <p>ID:{info5.id}</p>
        <p>Tên:{info5.productName}</p>
        <p>Giá:{info5.price}</p>
        <p>Số lượng:{info5.quantity}</p>
    </div>
  )
}
