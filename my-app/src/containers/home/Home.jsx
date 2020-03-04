import React, { Component } from "react";
import Producto from "./../../components/Producto";
import CarritoList from "./../../components/CarritoList";
import Layout from "./../../components/Layout";
import { getProducts } from "../../librerias-utils/services";
import {
  addToCart,
  removeOneUnit,
  deleteFromCarrito,
  filterProductsByName
} from "../../librerias-utils/utils";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [], productosCarrito: [], filtroCarrito: "", };
  }

  componentDidMount() {
    getProducts()
      .then(response => {
        console.log(this.state.productosCarrito);
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
        alert("Error al cargar los productos.");
      });
  }

  busqueda = product =>{
      debugger;
      let {products} = this.state;
      product !== "" ? this.setState( {products: filterProductsByName(products, product)} ) : getProducts();
  }

  addToCarrito = idProducto => {
    let { productosCarrito, products } = this.state;
    let item = products.find(p => p._id === idProducto);

    let cart = addToCart(productosCarrito, item);
    this.setState({ productosCarrito: cart });
  };

  handleDeleteFromCarrito = idProducto => {
    let { productosCarrito } = this.state;
    let cart = deleteFromCarrito(productosCarrito, idProducto);
    this.setState({ productosCarrito: cart });
  };

  handleRemoveOneUnit = idProducto => {
    let { productosCarrito } = this.state;
    let cart = removeOneUnit(productosCarrito, idProducto);
    this.setState({ productosCarrito: cart });
  };

  render() {
    const { products, productosCarrito } = this.state;
    const { handleShow, userLogged } = this.props;

    return (
      <div className="row">
        <div className="col-12 d-block">
          <Layout handleShow={handleShow} userLogged={userLogged} busqueda={this.busqueda} />
        </div>

        <div className="d-block" />

        <div className="col-3">
          <CarritoList
            productosCarrito={productosCarrito}
            removeOneUnit={this.handleRemoveOneUnit}
            deleteFromCarrito={this.handleDeleteFromCarrito}
          />
        </div>

        <div className="col-9 row">
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
    );
  }
}
