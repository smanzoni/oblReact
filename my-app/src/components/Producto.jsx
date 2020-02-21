import React, { Component } from "react";

class Producto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      "border-style": "groove",
      "border-radious": "14px"
    };

    let { name, description, price, _id, photo, addToCarrito } = this.props;

    return (
      <figure className="col-lg-3" style={style}>
        <img alt={name} src={photo} />
        <figcaption>
          <h2>Nombre: {name}</h2>
          <h3>Descripción: {description}</h3>
          <p>Precio: ${price}</p>
        </figcaption>
        <button className="btn btn-primary mb-2 mx-auto" onClick={evt => addToCarrito(_id)}>Agregar</button>
      </figure>
    );
  }
}

export default Producto;
