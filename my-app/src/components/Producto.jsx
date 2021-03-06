import React, { Component } from "react";

export default class Producto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      "borderStyle": "groove",
      "borderRadious": "14px",
    };
    const {name,photo,price,description,idProd,addToCarrito} = this.props;

    return (
      

      <figure className="h-30 col-4" style={style}>
        <img className="img-fluid rounded h-40 w-100" alt={name} src={photo} />
        <figcaption>
          <h4>{name}</h4>
          <h5>${price}</h5>
          <p>{description}</p>
          <button
            className="btn btn-primary mb-2 mx-auto"
            onClick={evt => addToCarrito(idProd)}
          >
            Agregar
          </button>
        </figcaption>
      </figure>
    );
  }
}

