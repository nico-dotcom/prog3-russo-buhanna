import React from "react";
import Footer from '../components/Footer'
import Navbar from "../components/NavBar";
import Peliculas from "../components/Peliculas";
import Formulario from "../components/Formulario";

function Home(props){
    return(
        <React.Fragment>
            <Navbar />
            <Formulario history={props.history}/>
            <Peliculas />
            <Footer />
        </React.Fragment>
    )
}

export default Home