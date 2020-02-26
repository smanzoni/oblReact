import React, { Component } from "react";
import ProductoCarrito from "./ProductoCarrito";

export default class CarritoList extends Component {
  constructor(props) {
    super(props);
  }

  finalPrice = () => {
    let { productosCarrito } = this.props;
    let finalP = 0;
    productosCarrito.forEach(p => {
      finalP += p.price * p.quantity;
    });

    return finalP;
  };

  render() {
    const { productosCarrito } = this.props;
    const precioFinal = this.finalPrice();
    const style = {
      "color": "white",
      "background-color": "black",
      "height":"100%"
    };

    return (
      <div className="pl-2" style={style}>
        <div><h5>Items seleccionados</h5><hr/></div>

        {productosCarrito.map((p, index) => (
          <ProductoCarrito
            key={index}
            name={p.name}
            quantity={p.quantity}
            price={p.price}
          />
        ))}

        <div>Total: ${precioFinal}</div>
      </div>
    );
  }
}
