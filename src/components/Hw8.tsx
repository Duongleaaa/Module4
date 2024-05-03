import ArticleHw8 from "./ArticleHw8";
import CartHw8 from "./CartHw8";
import HeaderHw8 from "./HeaderHw8";
import MenuHw8 from "./MenuHw8";
import NavHw8 from "./NavHw8";
import '../hw8.css'

export default function Hw8() {
  return (
    <>
    <h2>Bài 8</h2>
    <div className="containerHw8" >
      <div className="headerHw8">
        <HeaderHw8></HeaderHw8>
      </div>
      <div className="navHw8">
        <NavHw8></NavHw8>
      </div>
      <div className="menuHw8">
        <MenuHw8></MenuHw8>
      </div>
      <div className="cartHw8">
        <CartHw8>
        </CartHw8>
      </div>
      <div className="articleHw8">
        <ArticleHw8></ArticleHw8>
      </div>
    </div>
    </>
  )
}
