import React, {Component} from 'react';
 import Card from '../components/Card';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


export default class Resultados extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultados: [],
            loading: true
        }
    }
    
    
    componentDidMount(){
        const APIKEY = '42737f60c529bfe7e9586db8cb132a1c';
        const LoQueBuscaElUsuario = this.props.history.location.state.busqueda;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${LoQueBuscaElUsuario}`)
                .then((resp) => resp.json())
                .then(data =>
                    this.setState({resultados:data.results,
                            loading: false
                    })) 
        }
    
        render(){
            const { loading } = this.state;
    
        if (loading) {
            return <p>Cargando...</p>;
        }
            return(
                <div>
                    <NavBar/>

                    <h2>Search results</h2>

 
                    <div className='cards'>{this.state.resultados.length > 0?
                    this.state.resultados.map((pelicula, index) => (
                        <Card
                            key={index}

foto={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                        nombre={pelicula.title}
                        descripcion={pelicula.overview}
                        ruta={pelicula.id}
                    />
                ))

                :
                <p>No results found</p>
            }</div>

            <Footer/>
        </div>
    ); 
}
}