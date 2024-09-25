import { Component } from "react";
import './style.css'

class Formulario extends Component{

  constructor(props){
    super(props)
    this.state = {
      busqueda: ''
    }

  }

  cambioEnInput(evento){
    this.setState({
      busqueda: evento.target.value
    })
  }

  evitarSubit(evento){
    evento.preventDefault()
    this.props.history.push(`/resultados`, {busqueda: this.state.busqueda})
  }

  render(){

    return(
      <form className="search-form" onSubmit={(e) => this.evitarSubit(e)}>
        <input value={this.state.busqueda} onChange = {(e) => this.cambioEnInput(e)} type="text" placeholder="Buscar película"/>
        <button className="boton-buscar">Buscar</button>
      </form>
      
    )
  }

}

export default Formulario