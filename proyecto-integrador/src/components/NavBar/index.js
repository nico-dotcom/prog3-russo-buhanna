import React from "react";
import './style.css'
import Opcion from '../Opcion'


const opciones = [
    {
        nombre:"Inicio",
        ruta: '/'
    }, 
    {
        nombre: "About us",
        ruta: "/about"
    },
    {
        nombre: "Personajes",
        ruta:"/personajes"
    }
]

function Navbar() {
    return(
        <nav>
            <ul className="main-nav">
               {
                opciones.map((elm) => <Opcion data={elm} /> )
               }
            </ul>
            <ul className="user">
                <li>Nombre usuario 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar