import React, { Component } from "react";
import "./login.css";
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
        <h2 className="mx-auto">Login</h2>
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

        <button className="btn btn-primary mb-2 mx-auto">Entrar</button>
        
        <div>
          <a  className="mt-2 mx-auto" onClick={() => this.props.handleShow("signUp")}>
            Click aquí para registrarte!
          </a>
        </div>
      </form>
    );
  }
}
