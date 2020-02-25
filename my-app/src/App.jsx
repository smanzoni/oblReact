import React, { Component } from "react";
import Login from "./containers/login/Login";
import SignUp from "./containers/signUp/SignUp";
import Home from "./containers/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
      showSignUp: false,
      showHome: false
    };
  }

  handleShow = comp => {
    switch (comp) {
      case "login": {
        this.setState({ showLogin: true, showSignUp: false, showHome: false });
        break;
      }
      case "signUp": {
        this.setState({ showLogin: false, showSignUp: true, showHome: false });
        break;
      }
      case "home": {
        this.setState({ showLogin: false, showSignUp: false, showHome: true });
        break;
      }
    }
  };

  render() {
    return (
      <div className="container">
        {this.state.showLogin && <Login handleShow={this.handleShow} />}
        {this.state.showSignUp && <SignUp handleShow={this.handleShow} />}
        {this.state.showHome && <Home handleShow={this.handleShow} />}
      </div>
    );
  }
}
