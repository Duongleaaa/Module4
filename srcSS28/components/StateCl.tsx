import React, { Component } from 'react'
import Class from './Class'
interface ClassCpn{
    name:string,
    address:string,
    age:number,
    count:number,
}
export default class StateCl extends Component <any,ClassCpn> {
    constructor(props:ClassCpn) {
        super(props)
        this.state = {
            name: 'hoa',
            address: 'HN',
            age: 25,
            count:1,
        }
    }
    //nơi khai báo phương thức
    //muốn cập nhật state ở bên trong class thì dùng this.setState;
    // setState ({});
    handleClick=()=>{
        this.setState({
            count: this.state.count +1
        })
    }
  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <p>Count begin: {this.state.count}</p>
        <button onClick={this.handleClick}>add</button>
      </div>
    )
  }
}
