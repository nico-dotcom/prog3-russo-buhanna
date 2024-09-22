import React from "react";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import Favorito from "../components/Favorito";


function Favoritos(){
    return(
        <React.Fragment>
            <NavBar />
            <Favorito />
            <Footer />
        </React.Fragment>
    )
}

export default Favoritos