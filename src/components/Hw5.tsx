import React, { Component } from 'react'

export default class Hw5 extends Component {
  render() {
    return (
      <div style={{display:'flex',gap:'20px'}}> <h2>Bài 5</h2>
      <div style={{color:'white', backgroundColor:'red',height:'200px',width:'200px', display:'flex',justifyContent:'center',alignItems:'center'}}>Box</div>
      <div style={{color:'white', backgroundColor:'blue',height:'200px',width:'200px', display:'flex',justifyContent:'center',alignItems:'center'}}>Box</div>
      <div style={{color:'white', backgroundColor:'green',height:'200px',width:'200px', display:'flex',justifyContent:'center',alignItems:'center'}}>Box</div>
      </div>
    )
  }
}
