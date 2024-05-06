import React, { Component } from 'react'
//khia báo interface
interface Info2 {
  id:number;
  name: string;
  born:string;
  address:string;
}
export default class Hw2 extends Component<any,Info2> {
  // create state
  constructor(props:Info2) {
    super(props);
    this.state = {
      id:1,
      name:'Nguyễn Văn Sơn',
      born:'20/12/2023',
      address:'Thanh Xuân, Hà Nội'
    }

  }
  
  render() {
    // sau khi tạo xong thì render dữ liệu ra ngoài.
    return (
      <div>
        <h3>Thông tin cá nhân</h3>
        <p>id: {this.state.id}</p>
        <p>Họ và tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.born}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}
