import React, { Component } from "react";
import Producto from "./../../components/Producto";
import CarritoList from "./../../components/CarritoList";
import Layout from "./../../components/Layout";
import { getProducts } from "../../librerias-utils/services";
import { addToCart } from "../../librerias-utils/utils";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [], productosCarrito: [] };
  }

  componentDidMount() {
    getProducts()
      .then(response => {
        console.log(this.state.productosCarrito);
        this.setState({ products: response.data });
      })
      .catch(error => {
        alert("Error al cargar los productos.");
      });
  }

  addToCarrito = idProducto => {
    debugger;

    let { productosCarrito, products } = this.state;
    let item = products.find(p => p._id === idProducto);

    let cart = Array.from(addToCart(productosCarrito, item));
    this.setState({ productosCarrito: [...cart] });
    console.log(this.state.productosCarrito);
  };

  render() {
    const { products, productosCarrito } = this.state;
    const { handleShow } = this.props;

    return (
      <div>
        <div className="row d-block">
          <Layout handleShow={handleShow} />
        </div>

        <div className="d-block"></div>

        <div className="row">
          
          <div className="col-3 float-right">
            <CarritoList productosCarrito={productosCarrito} />
          </div>

          <div className="row col-9">
            {products.map((p, index) => (
              <Producto
                className="col-4"
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
      </div>
    );
  }
}
