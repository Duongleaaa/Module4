import React, { Component } from 'react';

interface State {
  name: string;
  address: string;
  cart: { id: number; product: string; quantity: number }[];
  age: number;
}

export default class ClassCpn extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Khai báo các giá trị
    this.state = {
      name: 'minh thu',
      address: 'hn',
      cart: [
        {
          id: 123,
          product: 'iphone',
          quantity: 1
        }
      ],
      age: 20
    };
  }

  render() {
    return (
      <>
        <div>ClassCpn_____________________________________________</div>
        <p>xin chào {this.state.name}</p>
        <p>Địa chỉ: {this.state.address}</p>
        <ul>
          {this.state.cart.map((e, i) => {
            return <li key={i}>{e.product}</li>;
          })}
        </ul>
      </>
    );
  }
}