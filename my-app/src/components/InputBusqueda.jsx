import React, { Component } from "react";

export default class InputBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = { busq:"", }
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render(){
    const {busqueda} = this.props;
    let {busq} = this.state;
    
    return(
          <div className="ml-4 mr-3">
              <input type="text" name="busq" onChange={evt => this.handleChange(evt)}  placeholder="no funciona"/>
              <button onClick={() => busqueda({busq})} className="btn btn-primary">Buscar</button>
          </div>
      );
  }
}
