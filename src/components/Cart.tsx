import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
interface ProductCartList{
  id:number;
  name:string;
  quantity:number;
  img:string;
}
export default function Cart() {
  let [showHide,setShowHide] = useState<boolean>(false);
  let handleClick = ()=>{
    setShowHide(!showHide);
  }
  // hàm ẩn hiện
  let tableCart = (showHide:boolean)=>{
    if(showHide){
      return(
        <div style={{
          width:'400px',
         padding:'20px',
         color:'white',
         backgroundColor:'black',
         position:'absolute',
         right:'0',
         top:'70px',
         borderRadius:'10px'
         }}>
          <h3>Cart</h3>
          <br />
          <hr />
          <br />
          <ul >
            <li style={{
              display: "flex",
              gap:'12px',
              justifyContent:'center',
              alignItems:'center'
            }}>
              <div style={{
                width:'50px',
                height:'50px',
                borderRadius:'50%'
              }}>
                <img
                style={{
                  width:'50px',
                  height:'50px',
                  borderRadius:'50%'
                }}
                  src="https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp"
                  alt=""
                />
              </div>
              <p style={{width:'50%'}}>name</p>
  
              <div className="sumOrSub">
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>
              <div className="trash">
                  del
              </div>
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <h3>Tổng số tiền là: 0</h3>
        </div>
      )
    }
    else{
      return (
        <></>
      )
    }
  }
  // hàm lấy dữ liệu local
  let [localCart,setLocalCart] = useState<ProductCartList[]>(()=>{
    let carts = localStorage.getItem('cartList');
    let localCart = carts ? JSON.parse(carts) : [];
    return localCart;
  })
  console.log(localCart);
  // //tạo một mảng rỗng chứa mảng giỏ
  // let cartList:ProductCartList[] = [];
  // localStorage.setItem('cartsList',JSON.stringify(cartList));

  return (
    <>
    <div style={{
      paddingRight:"20px"
    }} onClick={handleClick}>
    <FontAwesomeIcon icon={faCartShopping} size='lg'/>

    </div>
      {tableCart(showHide)}
    </>
  )
}
