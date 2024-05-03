import React, { Component } from 'react'

export default class Hw2 extends Component {

  render() {
    let result:string[] = []
    let calculate = (val1:number,val2:number,cal:string)=>{
        if(cal === '+'){
            result.push(`${val1} + ${val2} = ${val1+val2}`);
        }
        else if(cal === '-'){
            result.push(`${val1} - ${val2} = ${val1-val2}`);
        }
        else if(cal === '*'){
            result.push(`${val1} * ${val2} = ${val1*val2}`);
        }
        else if(cal === '/'){
            result.push(`${val1} / ${val2} = ${val1/val2}`);
        }
    }
    calculate(10,10,'+');
    calculate(10,10,'-');
    calculate(10,10,'*');
    calculate(10,10,'/');
    return (
      <>
      <h2>Danh sách kết quả: Bài 2 ________________________</h2>
      <ul>
        {result.map((e,i)=>{
            return <li key={i}>{e}</li>
        })}
      </ul>
      </>
    )
  }
}
