import React, { Component } from 'react'

export default class Hw1
 extends Component {
  render() {
    let arr1:string[] = ['HTML','CSS','JS','ReactJS'];
    return (
      <div>
        <h2>Danh sách khóa học/ Bài tập 1__________________________________________</h2>
        <ol>
          {arr1.map((e,i)=>{
            return <li key={i}>{e}</li>
          })}
        </ol>
      </div>
    )
  }
}
