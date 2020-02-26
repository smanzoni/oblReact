import React, { Component } from "react";

export default class ProductoCarrito extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, quantity, price } = this.props;
    const style = {"color":"white"}
    
    return (
      <div>
        <div>
          <label><b>{name}:</b></label><br/> {quantity} unidad/es = ${quantity * price}
        </div>
        <div>
          <hr style={style}/>
        </div>
      </div>
    );
  }
}
