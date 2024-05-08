import React, { Component } from 'react'
interface Props{
 status:string;
}
export default class Ex5 extends Component<any,Props> {
    constructor(props:Props) {
        super(props);
        this.state = {
          //lấy giá trị của prop
            status: this.props.status,
        }
    }
    //truyền sang phương thức bên app
    handleUpEx5 = ()=>{
      let update:string = 'Close the form';
      console.log(this.props.status);//giá trị bên app
      console.log(this.state.status);//giá trị bên ex5
      this.props.updateValue(update);

    }
  render() {
    return (
        <>
        <h2>home work 5</h2>
        <p>Status: {this.state.status}</p>
        <button onClick={this.handleUpEx5}>Change State</button>
      </>
    )
  }
}
