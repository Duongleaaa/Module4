import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { propTypes } from "react-bootstrap/esm/Image";
interface ProductTypeChild{
    id:number;
    name:string;
    price:number;
    quantity:number;
    img:string;
}
interface PropType{
    product:ProductTypeChild;
}
//hứng từ cha
export default function Product({product}: PropType) {
    console.log(product);
    let handleAdd = ()=>{
      console.log(product.id);
      
    }
  return (
    <>
      <div
        style={{
            borderRadius: '8px',
            backgroundColor:'#f5f5f5',
            width:'300px',
            marginTop:'50px'
        }}
      >
        <div
          style={{
            padding: "10px",
            width:'100%'
          }}
        >
          <img
            src= {product.img}
            alt=""
            style={{
              height: "60%",
              width: "100%",
            }}
          />
          <div className="container-choose">
            <h3>{product.name}</h3>
            <p >{product.price} $</p>
            <button className="button-add" onClick={handleAdd}><FontAwesomeIcon icon={faCartShopping} color="white" />  Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
