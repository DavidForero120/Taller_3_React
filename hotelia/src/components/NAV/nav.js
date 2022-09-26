import React from 'react';
import './nav.css';
import log from './HoteliaHorizontalBlanco.svg';
class nav extends React.Component{

      render(){
            return(
                  <nav>
                        
                  <div class="logo">
                        <img src={log} />
                        <i class="fa-solid fa-bars hamb"></i>
                  </div>
                  <div class="menu">
                        <a href="index.html" class="item">Inicio</a>
                        <a href="ubicacion.html" class="item">Ubícanos</a>
                        <a href="opiniones.html" class="item">Opiniones</a>
                        <a href="login.html" class="item"><button ><i class="fa-solid fa-user"></i>Iniciar Sesión</button></a>
                  </div>
            </nav>
                  );
      }

}
export default nav;