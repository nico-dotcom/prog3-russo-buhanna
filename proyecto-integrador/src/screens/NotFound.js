import React from "react";
import Navbar from "../components/NavBar";
import Footer from '../components/Footer'

function NotFound(){
    return(
        <React.Fragment>
            <Navbar />
            <h1>Error 404 </h1>
            <Footer />
        </React.Fragment>
    )
}

export default NotFound