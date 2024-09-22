import React from "react";
import MasVistas from "../MasVistas";
import Formulario from "../Formulario";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './style.css'

function Peliculas() {

      return (

        <section className="top-data">
          <Formulario/>
          <h2 className="titulo">Peliculas mas vistas </h2>      
          <Link to={`/masvistas`}><button className="btn-vermas">Ver todas</button></Link>

           <MasVistas limit={5}  />
           <h2 className="titulo">Peliculas en cartelera </h2>


        </section>
      );
}

export default Peliculas