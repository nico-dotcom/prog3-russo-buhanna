import React from "react";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import Detalle from "../components/Detalles";


function DetallePelicula(){
    return(
        <React.Fragment>
            <NavBar />
            <Detalle />
            <Footer />
        </React.Fragment>
    ) 
}

export default DetallePelicula