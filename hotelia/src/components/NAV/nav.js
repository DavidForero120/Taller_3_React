import React from 'react';
import './nav.css';
import log from './HoteliaHorizontalBlanco.svg';
import {Link} from 'react-router-dom';
class nav extends React.Component{

      render(){
            return(
                  <nav>
                        
                  <div class="logo">
                        <img src={log} alt="logo" />
                        <i class="fa-solid fa-bars hamb"></i>
                  </div>
                  <div class="menu">
                        <Link to="/" className="item">Inicio</Link>
                        <Link to="/" className="item">Ubícanos</Link>
                        <Link to="/" className="item">Opiniones</Link>
                        <a href="login.html" className="item"><button ><i class="fa-solid fa-user"></i>Iniciar Sesión</button></a>
                  </div>
            </nav>
                  );
      }

}
export default nav;