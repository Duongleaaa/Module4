import { useState } from "react";

import Nav from "./components/Nav";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

interface ProductType {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}
function App() {
  // lưu lên local

  // let [saveProduct,setSaveProduct] = useState<ProductType[]>([]);
  // let arr:ProductType[] =
  // [
  //   {
  //     "id": 1,
  //     "name": "Product 1",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 10.99,
  //     "quantity": 5
  //   },
  //   {
  //     "id": 2,
  //     "name": "Product 2",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 19.99,
  //     "quantity": 8
  //   },
  //   {
  //     "id": 3,
  //     "name": "Product 3",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 19.99,
  //     "quantity": 8
  //   },
  //   {
  //     "id": 4,
  //     "name": "Product 4",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 19.99,
  //     "quantity": 8
  //   },
  //   {
  //     "id": 5,
  //     "name": "Product 5",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 19.99,
  //     "quantity": 8
  //   },
  //   {
  //     "id": 6,
  //     "name": "Product 6",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 19.99,
  //     "quantity": 8
  //   },
  //   {
  //     "id": 7,
  //     "name": "Product 7",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 19.99,
  //     "quantity": 8
  //   },
  //   {
  //     "id": 8,
  //     "name": "Product 8",
  //     "img": "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_33049/iphone-15-pro-m_main_61_450.png.webp",
  //     "price": 7.49,
  //     "quantity": 12
  //   }
  // ];
  // const handleSaveProduct = () => {
  //   arr.forEach((product) => {
  //     setSaveProduct((prevProducts) => [...prevProducts, product]);
  //   });
  //   localStorage.setItem('productList',JSON.stringify(saveProduct));
  //   console.log(saveProduct);
  // };

  return (
    <>
      <Nav></Nav>
      <ProductList></ProductList>
      {/* <button onClick={handleSaveProduct}>save</button> */}

    </>
  );
}

export default App;
