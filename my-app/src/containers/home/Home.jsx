import React, { Component } from "react";
import Producto from "./../../components/Producto";
import Layout from "./../../components/Layout";
import { getProducts } from "../../librerias-utils/services";
//import { addToCart } from "../../librerias-utils/utils";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [], productosCarrito: [] };
  }

  componentDidMount() {
    getProducts()
      .then(response => {
        console.log(response);
        this.setState({ products: response.data });
      })
      .catch(error => {
        alert("Error al cargar los productos.");
      });
  }

  addToCarrito = idProducto => {
    // let { productosCarrito } = this.state;
    // let cart = addToCart(productosCarrito, idProducto);
    // this.setState({ productosCarrito: cart });
  };

  render() {
    const { products } = this.state;
    const { handleShow } = this.props;

    return (
      <div>
        <div className="row d-block">
          <Layout handleShow={handleShow} />
        </div>
        <div className="row">
          <div className="d-block"></div>
          {products.map((p, index) => (
            <Producto
              key={index}
              idProd={p._id}
              name={p.name}
              description={p.description}
              price={p.price}
              photo={p.photo}
              addToCarrito={this.addToCarrito}
            />
          ))}
        </div>
      </div>
    );
  }
}
