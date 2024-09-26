
import React, { Component } from 'react'
import Card from '../Card';

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

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      
        this.setState({
          peliculas: data.results, 
          peliculasBackup: data.results
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


  render() {
    const { peliculas } = this.state;

    return (
      <div>
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

        {!this.props.limit < peliculas.length && (

          <button className='ver-mas' onClick={()=> this.verMas()}>Ver Más</button>
        )}
      </div>
    );
  }
}
