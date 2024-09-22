import React, { Component } from 'react'
import Card from '../Card';
import './styles.css';
export default class EnCartelera extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      mostrar: 5 
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

  verMas = () => {
    this.setState({
      mostrar: this.state.mostrar + 5
    });
};

  render() {
    const {mostrar, peliculas } = this.state;
return (
    <div>
        <section className="cards">
          {peliculas.slice(0, mostrar).map((pelicula) => (
            <Card
              key={pelicula.id}

foto={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
              nombre={pelicula.title}
              descripcion={pelicula.overview}
              ruta={pelicula.id}
            />
          ))}
        </section>

        {!this.props.limit && mostrar < peliculas.length && (
          <button className='ver-mas' onClick={this.verMas}>Ver
Más</button>
        )}
        </div> 
    );
  } 
}