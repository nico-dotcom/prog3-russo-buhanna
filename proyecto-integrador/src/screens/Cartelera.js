import React from "react";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import EnCartelera from "../components/EnCartelera";

function Cartelera(){
    return(
        <React.Fragment>
            <NavBar />
            <h1>Peliculas en cartelera</h1>
            <EnCartelera limit={false}/>
            <Footer />
        </React.Fragment>
    )
}

export default Cartelera