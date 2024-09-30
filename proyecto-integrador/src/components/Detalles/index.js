import React, { Component } from 'react'
import CardDetalles from '../CardDetalles';

class Detalles extends Component {
    constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      loading: true
    };
}

componentDidMount() {
    const APIKEY = '42737f60c529bfe7e9586db8cb132a1c';
    let movie_id = this.props.match.params.id;
    console.log(movie_id);

fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}`)
    
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);

    this.setState({
        peliculas: [data],
        loading: false
    }); 

    })
    
    .catch((err) => console.log(err));
}

render() {
    const { loading } = this.state;
    
    if (loading) {
    return <p>Cargando...</p>;
}
    return (
      <div>
      {this.state.peliculas.length > 0 && (
        <CardDetalles

        foto={`https://image.tmdb.org/t/p/original/${this.state.peliculas[0].poster_path}`}
                    nombre={this.state.peliculas[0].title}
                    descripcion={this.state.peliculas[0].overview}
                    ruta={this.state.peliculas[0].id}
                    rating={this.state.peliculas[0].vote_average}

                    fechaEstreno={this.state.peliculas[0].release_date}
                    sinopsis = {this.state.peliculas[0].overview}
                    duracion = {this.state.peliculas[0].runtime}
                    />
                )} 
            </div>
        ); 
    }
}

export default Detalles;