import React, { Component } from 'react';
import Card from '../Card';

export default class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [] 
    };
  }

  componentDidMount() {

    const APIKEY = '42737f60c529bfe7e9586db8cb132a1c';
    let storage = localStorage.getItem('PeliculasFavoritas');

    if (storage !== null){
      let storageParseado = JSON.parse(storage);

      Promise.all(
        storageParseado.map(movie_id =>
          fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}`)
          .then(resp => resp.json())
        ) 
    )

    .then(data => this.setState({peliculas: data}))

    }

  }

  actualizarFavs(id) {
    // Elminamos de la lista de peliculas el id que obtenemos de la pelicula elminada
    let nuevasPelicula = this.state.peliculas.filter(item => item.id !== id);
    
    // Establecemos el nuevo estado de peliculas sin la pelicula eliminada
    this.setState({
      peliculas: nuevasPelicula
    });

  }

  render() {
    return (
      <div>
        <h2 className="titulo" >Tus peliculas favoritas</h2>


        <section className="cards">
          {this.state.peliculas.length > 0 ? (
            this.state.peliculas.map((pelicula, index) => (
              <Card
                key={index}
                foto={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                nombre={pelicula.title}
                descripcion={pelicula.overview}
                ruta={pelicula.id}
                actualizarFavPage={(id) => this.actualizarFavs(id)}
              />
            )) 
          ) : (
            <p>No tienes películas favoritas guardadas.</p>
          )}
        </section>
      </div>
    );
  }
}
