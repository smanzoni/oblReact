import React, { Component } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.handleShow("login")}
          className="btn btn-primary"
        >
          Salir
        </button>
      </div>
    );
  }
}
