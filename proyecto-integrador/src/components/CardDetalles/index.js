import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './style.css'
class CardDetalles extends Component{
    
    render() {
        return (
            <div className="character-card-new">
            <Link to={`/personaje/id/${this.props.ruta}`} >
                <img src={this.props.foto} alt={this.props.nombre} />
            </Link>

            <div className="text-content">
                <h4 className="title">{this.props.nombre} </h4>
                <p className="text">{this.props.descripcion} </p>
                <p className="text">Duracion: {this.props.duracion} minutos </p>
                <p className="text">{this.props.sinopsis} </p>
                <p className="text">Fecha de estreno: {this.props.fechaEstreno} </p>
                <p className="text">Rating: {this.props.rating}/10 </p>
            </div>
        </div>
        ); 
    };
}

export default CardDetalles