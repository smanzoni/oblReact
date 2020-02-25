import React, { Component } from "react";
import "./signUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { signUp } from "../../librerias-utils/services";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  createAccount = (event) => {
    event.preventDefault()
    let { userName, password } = this.state;

    signUp(userName, password)
      .then(response => {
        this.setState({ userName: "", password: "" });
        alert("Usuario creado con éxito");
      })
      .catch(error => {
        alert("ola ke ase");
      });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    let { userName, password } = this.state;

    return (
      <form onSubmit={this.createAccount}>
        <h2 className="mx-auto">Registro</h2>
        <br />
        <div className="form-group">
          <label htmlFor="userName">Nombre de usuario</label>
          <input
            name="userName"
            placeholder="Username"
            className="form-control mx-auto"
            type="text"
            value={userName}
            onChange={evt => this.handleChange(evt)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            placeholder="Password"
            className="form-control mx-auto"
            type="password"
            value={password}
            onChange={evt => this.handleChange(evt)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-2 mx-auto">
          Registrar
        </button>

        <div className="mt-2">
          <a className="mx-auto" onClick={() => this.props.handleShow("login")}>
            Go to login!
          </a>
        </div>
      </form>
    );
  }
}
