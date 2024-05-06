import React, { Component } from 'react'
   // tạo một interface
   interface Fullname{
    name:string;
   }
export default class Hw1 extends Component<any,Fullname> {
 
    //tạo một state
    constructor(props:Fullname) {
        super(props)
        this.state = {
            name:'Lê Khánh Dương'
        }
    }
  render() {
    return (
      <>
      {/* render dữ liệu ra ngoài */}
      <h3>Họ và tên : {this.state.name}</h3>
      
      </>
    )
  }
}
