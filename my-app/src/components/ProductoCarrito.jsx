import React, { Component } from "react";

export default class ProductoCarrito extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, quantity, price } = this.props;
    return (
      <div>
        <div>
          <h4>{name}:</h4> {quantity} unidades = ${quantity * price}
        </div>
        <div>
          <hr />
        </div>
      </div>
    );
  }
}
