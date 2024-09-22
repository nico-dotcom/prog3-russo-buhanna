import React, { Component } from 'react';
import './style.css'

export default class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = {valor: ''};
    }
  
    evitarSubmit(event) {
      event.preventDefault();
    }
  
    controlarCambios(event) {
      this.setState({valor: event.target.value});
    }
  
    render() {
      return (
        <form class="search-form" onSubmit={(event) => this.evitarSubmit(event)}>
        <label>Busqueda: </label>
        <input
          type="text"
          onChange={(event) => this.controlarCambios(event)}
          value={this.state.valor}
        />
        <input type="submit" value="Submit" />
      </form>
      );
    }
  }
  