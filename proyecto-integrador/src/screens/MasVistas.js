import React from "react";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import MasVistas from "../components/MasVistas";

function Cartelera(){
    return(
        <React.Fragment>
            <NavBar />
            <h1>Peliculas mas vistas</h1>
            <MasVistas limit={false}/>
            <Footer />
        </React.Fragment>
    )
}

export default Cartelera