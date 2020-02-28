import React, { Component } from "react";

export default class ProductoCarrito extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      quantity,
      price,
      id,
      removeOneUnit,
      deleteFromCarrito
    } = this.props;
    const itemPrice = (quantity * price).toFixed(2);
    const style = { color: "white" };

    return (
      <div>
        <div>
          <label>
            <b>{name}:</b>
          </label>
          <br /> {quantity} unidad/es = ${itemPrice}<br/>
          <button className="btn btn-danger" onClick={() => removeOneUnit(id)}>Quitar 1</button>
          <button className="btn btn-danger" onClick={() => deleteFromCarrito(id)}>Eliminar</button>
        </div>
        <div>
          <b>____________________________________</b>
        </div>
      </div>
    );
  }
}
