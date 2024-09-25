import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css";

class Card extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            verMas: false,
            textBoton: "Ver más",
            esFavorito: false 
        };
    }

    componentDidMount() {
        let storage = localStorage.getItem('PeliculasFavoritas');
        if (storage !== null) {
            let arrParseado = JSON.parse(storage);
            let estaMiId = arrParseado.includes(this.props.ruta); 
            if (estaMiId) {
                this.setState({
                    esFavorito: true
                });
            }
        }
    }

    verMas() {
        // this.setState(prevState => ({
        //     verMas: !prevState.verMas,
        //     textBoton: prevState.verMas ? "Ver más" : "Ocultar descripción"
        // }));
    }

    agregarAStorage() {
        const id = this.props.ruta; 
        let storage = localStorage.getItem('PeliculasFavoritas');
        
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            if (!storageParseado.includes(id)) {  
                storageParseado.push(id);
                let storageStringificado = JSON.stringify(storageParseado);
                localStorage.setItem('PeliculasFavoritas', storageStringificado);
            }
        } else {
            let arrFavs = [id];
            let favsStringificado = JSON.stringify(arrFavs);
            localStorage.setItem('PeliculasFavoritas', favsStringificado);
        }
    
        this.setState({
            esFavorito: true
        });
    }

    sacarDeStorage() {
        const id = this.props.ruta;
        let storage = localStorage.getItem('PeliculasFavoritas');
        
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            let nuevoStorage = storageParseado.filter(item => item !== id);
            let storageStringificado = JSON.stringify(nuevoStorage);
            localStorage.setItem('PeliculasFavoritas', storageStringificado);
        }

        this.setState({
            esFavorito: false
        });


        if (this.props.actualizarFavPage) {
            this.props.actualizarFavPage(id);
        }
        
    }


    render() {
        return (
            <div className="character-card">
                <Link to={`/pelicula/id/${this.props.ruta}`}>
                    <img src={this.props.foto} alt="" />
                </Link>
                <h4 className="titulopelicula">{this.props.nombre}</h4>
                <p className="textoinfo">
                    {this.state.verMas ? this.props.descripcion : `${this.props.descripcion.substring(0, 100)}...`}
                </p>
                <button onClick={() => this.verMas()} className="btn">{this.state.textBoton}</button>
                <Link to={`/pelicula/id/${this.props.ruta}`}>
                    <button className="btn">Ir a detalle</button>
                </Link>

                {
                    this.state.esFavorito ?
                    <button className="btn" onClick={() => this.sacarDeStorage()}>
                        Sacar de favoritos
                    </button>
                    :
                    <button className="btn" onClick={() => this.agregarAStorage()}>
                        Agregar a favoritos
                    </button>
                }
            </div>
        );
    }
}

export default Card;
