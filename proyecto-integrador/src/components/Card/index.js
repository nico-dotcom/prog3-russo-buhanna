import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './style.css'

class Card extends Component{

    constructor(props) {
        super(props); 
    
        this.state = {
            verMas: false,
            textBoton: "Ver más"
        };
        }

        verMas() {
        this.setState(prevState => ({
            verMas: !prevState.verMas,
            textBoton: prevState.verMas ? "Ver descripcion" : "Ocultar descripcion"
        }));
        }


    render() {
        return (
            <div className="character-card">
            <Link to={`/personaje/id/${this.props.ruta}`}><img src={this.props.foto} alt="" /></Link>
            
            <h4 className="titulopelicula">{this.props.nombre}</h4>
            
            <p className="textoinfo">{this.state.verMas ? this.props.descripcion : `${this.props.descripcion.substring(0, 100)}...`}</p>
            <button onClick={() => this.verMas()} className="btn">{this.state.textBoton}</button>
            
            <Link to={`/personaje/id/${this.props.ruta}`}> <button className="btn">Ir a detalle</button></Link>
            <button className="btn">Agregar a favoritos</button>


            </div>
        );
    };
}


export default Card
