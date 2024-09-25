import React from "react";
import MasVistas from "../MasVistas";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './style.css'
import EnCartelera from "../EnCartelera";

function Peliculas() {

      return (

        <section className="top-data">
          <h2 className="titulo">Peliculas mas vistas </h2>      
          <Link to={`/masvistas`}><button className="btn-vermas">Ver todas</button></Link>

           <MasVistas limit={5}  />

           <h2 className="titulo">Peliculas en cartelera </h2>
           <Link to={`/encartelera`}><button className="btn-vermas">Ver todas</button></Link>
           <EnCartelera limit={5}  />

        </section>
      );
}

export default Peliculas