import React from 'react';
import './sidebar.css';


import hoteliaCampana from './hotelia campana.svg';
import hotelia_h_blanco from './Hotelia horizontal blanco.svg';
import fotomobile from './perfil.png';

class Sidebar extends React.Component{
    render(){
        return(
            <section className='menu'>
                <div className="encabezado">
                    <div className="logo">
                        <img src={hotelia_h_blanco} alt="Hotelia horizontal blanco" className='desktop'/>
                        <img src={hoteliaCampana} alt="hotelia campana" className='mobile'/>
                    </div>
    
                    <div className="desc">
                        <div>
                            <img src={fotomobile} alt="foto-mobile" />
                        </div>
                        <h3>Angie Vargas</h3>
                        <h4>angie@gmail.com</h4>
                    </div>
                </div>
                <div className="opciones">
                    <div className="mrd">
                            <a href="listadoHabi.html" class="ho"><i class="fa-solid fa-bed" id="menu"></i><p>Habitaciones</p></a>
                            <a href="busqueda.html" class="ho"><i class="fa-solid fa-bell-concierge" id="menu"></i><p>Reservas</p></a>
                            <a href="listadoHabi.html" class="ho"><i class="fa-solid fa-bed" id="menu"></i><p>Habitaciones</p></a>
                            <a href="busqueda.html" class="ho"><i class="fa-solid fa-bell-concierge" id="menu"></i><p>Reservas</p></a>
                    </div>
    
                    <div className="cerrar">
                        <a href="index.html"><i class="fa-solid fa-arrow-right-from-bracket" id="menu"></i><p>Cerrar Sesion</p></a>
                    </div>
    
                </div>
            </section>
            );
    }
}
export default Sidebar;