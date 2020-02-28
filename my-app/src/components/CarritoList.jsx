import React, { Component } from "react";
import ProductoCarrito from "./ProductoCarrito";
import { countCartTotalAmount } from "./../librerias-utils/utils";

export default class CarritoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      color: "white",
      backgroundColor: "black",
      height: "100%"
    };

    const { productosCarrito, removeOneUnit, deleteFromCarrito } = this.props;
    const subTotal = countCartTotalAmount(productosCarrito);
    const iva = (18 * subTotal) / 100;
    const finalPrice = Number(subTotal) + Number(iva);

    return (
      <div className="pl-2" style={style}>
        <div>
          <h5>
            <u>Items seleccionados</u>
          </h5>
          <b>____________________________________</b>
        </div>

        {productosCarrito.map((p, index) => (
          <ProductoCarrito
            key={index}
            name={p.name}
            quantity={p.quantity}
            price={p.price.toFixed(2)}
            id={p._id}
            removeOneUnit={removeOneUnit}
            deleteFromCarrito={deleteFromCarrito}
          />
        ))}

        <div className="mt-3">
          SubTotal: ${subTotal.toFixed(2)}
          <br />
          IVA: ${iva.toFixed(2)}
          <br />
          <u>
            <b>Precio final:</b> ${finalPrice.toFixed(2)}
          </u>
        </div>
      </div>
    );
  }
}
