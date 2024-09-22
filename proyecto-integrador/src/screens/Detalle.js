import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Detalle from "../components/Detalles";


function DetallePelicula(){
    return(
        <React.Fragment>
            <Navbar />
            <Detalle />
            <Footer />
        </React.Fragment>
    ) 
}

export default DetallePelicula