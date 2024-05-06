import Class from "./components/Class";
import Functional from "./components/Functional";
import Hw1 from "./components/Hw1";
import Hw2 from "./components/Hw2";
import Hw3 from "./components/Hw3";
import Hw4Child from "./components/Hw4Child";
import Hw4Parents from "./components/Hw4Parents";
import Hw5Parents from "./components/Hw5Parents";
import Hw6Parents from "./components/Hw6Parents";
import StateCl from "./components/StateCl";
import StateF from "./components/StateF";


export default function App() {
  const fullName:string = 'vip pro';
  const students:string[] = ['huy','hoang', 'hong']
  //truyền sang class
  let age:number = 10;
  let number:number[] = [1,2,3,4]
  //State-------------------------------------------------------------------

  return (
    <div>
      {/* 
      1.props: properties
      dùng để truyền dữ liệu vào từ cpn cha --> con.

      2.state: dùng để quản lí dữ liệu bên trong cpn.

      */}

      {/* truyền dữ liệu cha sang con */}
    <Functional nameF = {fullName} students={students}></Functional>
    <Class age = {age} number ={number}></Class>
    <h1>__________________________________________________________</h1>
    {/*demo State ------------------------------------------------------- */}
    <StateF></StateF>
    <StateCl></StateCl>
    <h1>___________HomeWork____________</h1>
    <h2>bài 1</h2>
    <Hw1></Hw1>
    <h2>bài 2</h2>
    <Hw2></Hw2>
    <h2>bài 3</h2>
    <Hw3></Hw3>
    <h2>bài 4</h2>
    <Hw4Parents></Hw4Parents>
    <h2>bài 5</h2>
    <Hw5Parents></Hw5Parents>
    <h2>bài 6</h2>
    <Hw6Parents></Hw6Parents>
    </div>
  )
}
