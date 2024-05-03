import React, { Component } from 'react'

export default class Hw3 extends Component {
  render() {
    interface User3{
        name:string,
        sex:string,
        born:string,
        email:string,
        address:string;
    }
    let user3:User3 = {
        name:'Nguyen Van A',
        sex:'nam',
        born:'06/03/2024',
        email:'nva@gmail.com',
        address:'HN'
    }
    return (
      <>
      <h2>Thông tin cá nhân : Bài 3 ________________________</h2>
      <ul>
        <li>Họ và tên: <b>{user3.name}</b></li>
        <li>Giới tính: <b>{user3.sex}</b></li>
        <li>Ngày sinh: <b>{user3.born}</b></li>
        <li>Email: <b>{user3.email}</b></li>
        <li>Địa chỉ: <b>{user3.address}</b></li>
      </ul>
      </>
    )
  }
}
