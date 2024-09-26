import React, { Component } from 'react'
import Card from '../Card';
import './style.css';
import Filtrado from '../Filtrado'


export default class EnCartelera extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      paginaACargar: 2,
      peliculasBackup: [],
    };
  }

  componentDidMount() {
    const APIKEY = '42737f60c529bfe7e9586db8cb132a1c';

fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`)

      .then((resp) => resp.json())
      .then((data) => {

        this.setState({
          peliculas: data.results,
          mostrar: 5
        });
    })
      .catch((err) => console.log(err));

  }

  verMas(){
    const APIKEY = '42737f60c529bfe7e9586db8cb132a1c';
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&page=${this.state.paginaACargar}`)
    .then(resp => resp.json())
    .then(data => this.setState({
        peliculas: this.state.peliculas.concat(data.results),
        peliculasBackup: this.state.peliculas.concat(data.results),
        paginaACargar: this.state.paginaACargar + 1
    }))
    .catch(err => console.log(err))

}

filtrarPeliculas(nombrePelicula){
  const peliculasFiltradas = this.state.peliculas.filter(
      (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()) 
  )

  this.setState({
      peliculas: peliculasFiltradas
  })
  
}


  render() {
    const { peliculas } = this.state;

    return (
      <div>

        {!this.props.limit  && (
          <Filtrado filtrarPeliculas={ (nombre) => this.filtrarPeliculas(nombre)}/>
          )}
        
        {!this.props.limit  && (

        <section className="cards">
          {peliculas.map((pelicula) => (
            <Card
              key={pelicula.id}
              foto={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
              nombre={pelicula.title}
              descripcion={pelicula.overview}
              ruta={pelicula.id}
            />
          ))}

      
        </section>
        )}

        {this.props.limit  && (

        <section className="cards">
          {peliculas.slice(0,5).map((pelicula) => (
            <Card
              key={pelicula.id}
              foto={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
              nombre={pelicula.title}
              descripcion={pelicula.overview}
              ruta={pelicula.id}
            />
          ))}


        </section>
        )}

        {!this.props.limit  && (
          
          <button className='ver-mas' onClick={()=> this.verMas()}>Ver Más</button>
        )}
      </div>
    );
  }
}
