import React, { Component } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "../../librerias-utils/services";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  validateLogin = event => {
    event.preventDefault();
    let { userName, password } = this.state;

    login(userName, password)
      .then(response => {
        this.props.handleShow("home");
      })
      .catch(error => {
        alert("Las credenciales especificadas no son válidas.");
      });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.validateLogin}>
          <h2 className="mx-auto">Login</h2>
          <br />

          <div className="form-group">
            <label htmlFor="userName">Nombre de usuario</label>
            <input
              //value="smanzoni@gmail.com"
              name="userName"
              placeholder="Username"
              className="form-control mx-auto"
              type="text"
              value={this.state.userName}
              onChange={evt => this.handleChange(evt)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              //value="12345678"
              name="password"
              placeholder="Password"
              className="form-control mx-auto"
              type="password"
              value={this.state.password}
              onChange={evt => this.handleChange(evt)}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-2 mx-auto">
            Entrar
          </button>

          <div>
            <a
              className="mt-2 mx-auto"
              onClick={() => this.props.handleShow("signUp")}
            >
              Click aquí para registrarte!
            </a>
          </div>
        </form>
      </div>
    );
  }
}
