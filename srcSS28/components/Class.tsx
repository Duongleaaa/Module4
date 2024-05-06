import React, { Component } from 'react'
interface ClassCpn{
    age:number;
    number:number[];
}
export default class Class extends Component<ClassCpn> {
  render() {
    return (
      <div>Class
        <p>năm nay vip pro {this.props.age}</p>
        <ul>
            {this.props.number.map((e,i)=>{
                return <li key={i}>{e}</li>
            })}
        </ul>
      </div>
    )
  }
}

