import React, { Component } from "react";

export default class ProductoCarrito extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, quantity, price } = this.props;
    const itemPrice = (quantity * price).toFixed(2);
    const style = {"color":"white"}
    
    return (
      <div>
        <div>
          <label><b>{name}:</b></label><br/> {quantity} unidad/es = ${itemPrice}
        </div>
        <div>
          <hr style={style}/>
        </div>
      </div>
    );
  }
}
