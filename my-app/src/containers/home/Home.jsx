import React, { Component } from "react";
import Producto from "./../../components/Producto";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProducts } from "../../librerias-utils/services";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], productosCarrito: [], msg: "" };
  }

  componentDidMount() {
    getProducts()
      .then(response => {
        this.setState({ products: response, msg: "" });
      })
      .catch(error => {
        this.setState({ msg: "Error" });
      });
  }

  addToCarrito = idProducto => {
    let prods = this.state.productosCarrito;
    this.setState({ productosCarrito: [...prods, idProducto] });
  };

  render() {
    let { products } = this.state;

    return (
      <div className="container">
        <div className="row">
          {products.map((p, index) => (
            <div>
              <Producto
                key={index}
                name={p.name}
                description={p.description}
                price={p.price}
                photo={p.photo}
                addToCarrito={this.addToCarrito}
              />
            </div>
          ))}

          
          <button
            onClick={() => this.props.handleShow("login")}
            className="btn btn-primary"
          >
            Salir
          </button>

          <p>{this.state.msg}</p>
        </div>
      </div>
    );
  }
}
