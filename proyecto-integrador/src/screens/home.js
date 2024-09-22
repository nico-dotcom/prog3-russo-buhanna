import React from "react";
import Footer from '../components/Footer'
import Navbar from "../components/NavBar";
import Peliculas from "../components/Peliculas";

function Home(){
    return(
        <React.Fragment>
            <Navbar />
            <Peliculas />
            <Footer />
        </React.Fragment>
    )
}

export default Home