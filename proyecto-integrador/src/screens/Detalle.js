import React from "react";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import Detalle from "../components/Detalles";


function DetallePelicula(props){
    return(
        <React.Fragment>
            <NavBar />
            <Detalle match ={props.match}/>
            <Footer />
        </React.Fragment>
    ) 
}

export default DetallePelicula