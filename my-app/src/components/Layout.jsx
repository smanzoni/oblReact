import React, { Component } from "react";
import InputBusqueda from "./InputBusqueda"

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleIn = {
      "backgroundColor": "black",
      "padding": "10px",
      "color":"white",
    };
    const { handleShow, userLogged, busqueda } = this.props;

    return (
      <div style={styleIn} className="d-flex mb-2 h-08">
        <h4>Usuario logueado: <u>{userLogged}</u></h4>
        <InputBusqueda busqueda={busqueda}/>
        <button onClick={() => handleShow("login")} className="btn btn-primary ml-auto mr-2 p-2">
          Salir
        </button>
        <br />
      </div>
    );
  }
}
