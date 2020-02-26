import React, { Component } from "react";

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleIn = {
      "backgroundColor": "black",
      "padding": "10px"
    };
    const { handleShow } = this.props;

    return (
      <div style={styleIn} className="d-flex mb-2 h-08">
        <button onClick={() => handleShow("login")} className="btn btn-primary ml-auto">
          Salir
        </button>
        <br />
      </div>
    );
  }
}
