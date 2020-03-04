import React, { Component } from "react";

export default class InputBusqueda extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {handleChange} = this.props;
    
    return(
          <div>
              <input type="text" name="inputBusqueda" onChange={evt => handleChange(evt)} namespace="Filtra tu busqueda aqui"/>
          </div>
      );
  }
}
