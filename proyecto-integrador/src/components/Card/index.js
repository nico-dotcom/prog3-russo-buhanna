import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css";

class Card extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            verMas: false,
            esFavorito: false,
            textoBoton: 'Ver Mas',
            seleccionado: false
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

    cambiarVerMas(){
        this.setState({
          verMas: !this.state.verMas,
          textoBoton: this.state.verMas ? 'Ver Mas' : 'Ver Menos' 
        })
    
      }
    
      seleccionarYDeseleccionar(){
        this.setState({
          seleccionado: !this.state.seleccionado
        })
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

                {this.state.verMas ?
                                        <p className="textoInfo">{this.props.descripcion}r</p>
                                    :
                                        null

                                }

                        <button className="btn" onClick={() => this.cambiarVerMas()} >
                            {this.state.textoBoton}
                        </button>
            </div>
        );
    }
}

export default Card;
