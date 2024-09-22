import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import EnCartelera from "../components/EnCartelera";

function Cartelera(){
    return(
        <React.Fragment>
            <Navbar />
            <h1>Peliculas en cartelera</h1>
            <EnCartelera limit={false}/>
            <Footer />
        </React.Fragment>
    )
}

export default Cartelera