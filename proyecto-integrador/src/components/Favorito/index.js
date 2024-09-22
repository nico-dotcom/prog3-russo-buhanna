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

    if (storage !== null) {
      let arrFavs = JSON.parse(storage); 

      for (let i = 0; i < arrFavs.length; i++) {
        let movie_id = arrFavs[i];

        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}`)
          .then((resp) => resp.json())
          .then((data) => {
            this.setState((prevState) => {
              let nuevasPeliculas = prevState.peliculas.slice(); 
              nuevasPeliculas.push(data);
              return { peliculas: nuevasPeliculas };
            });
          })
          .catch((err) => console.log(err));
      }
    }
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
