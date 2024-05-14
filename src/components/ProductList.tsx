import React, { useState } from 'react'
import Product from './Product'
//interface cho kiểu dữ liệu của phần tử product
interface ProductTypeReal{
    id:number;
    name:string;
    price:number;
    quantity:number;
    img:string;
}
export default function ProductList() {
    //tạo state chứa dữ liệu từ 
    let [productsList,setProductsList] = useState<ProductTypeReal[]>(()=>{
        let proLocal = localStorage.getItem('productList');
        //validate nếu có sẽ tiến hành ép kiểu js, ko thì mảng rỗng.
        let products = proLocal ? JSON.parse(proLocal) : [];
        return products;
    });
    console.log(productsList);

  return (
    <>
      <ul className='productList' style={{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
      }}>
        {
                productsList.map((product:ProductTypeReal)=>(
                    <div  key={product.id}>
                        {/* truyền sang con */}
                        <Product product = {product}></Product>
                    </div>
                ))
                
        }

      </ul>

    </>
  )
}
