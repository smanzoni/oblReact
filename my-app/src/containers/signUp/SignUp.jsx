import React, { Component } from "react";
import "./signUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleUsr = evt => {
    this.setState({ userName: evt.value });
  };

  handlePw = evt => {
    this.setState({ password: evt.value });
  };

  render() {
    return (
      <form>
        <h2 className="mx-auto">Registro</h2>
        <br />
        <div className="form-group">
          <label htmlFor="userName">Nombre de usuario</label>
          <input
            placeholder="Username"
            className="form-control mx-auto"
            type="text"
            value={this.state.userName}
            onChange={evt => this.handleUsr(evt)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            placeholder="Password"
            className="form-control mx-auto"
            type="password"
            value={this.state.password}
            onChange={evt => this.handlePw(evt)}
          />
        </div>

        <button class="btn btn-primary mb-2 mx-auto">Registrar</button>
        <div className="mt-2">
          <a className="mx-auto" onClick={() => this.props.handleShow("login")}>
            Go to login!
          </a>
        </div>
      </form>
    );
  }
}
