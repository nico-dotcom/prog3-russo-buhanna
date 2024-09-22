import React from "react";
import './style.css'
import Opcion from "../Opcion/";


const opciones = [
    {
        nombre:"Home",
        ruta: '/'
    }, 
    {
        nombre: "Favoritos",
        ruta: "/favoritos"
    },
    {
        nombre: "Mas vistas",
        ruta:"/masvistas"
    }, 
    {
        nombre: "En cartelera",
        ruta:"/encartelera"
    }

]

function Navbar() {
    return(
        <nav>
            
            <ul className="main-nav">
            <img className="logo" src="../img/logo.png" alt="" />

               {
                opciones.map((elm) => <Opcion data={elm} /> )
               }

            </ul>
            
        </nav>
    )
}

export default Navbar