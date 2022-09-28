import './ubicacion.css'
import React from 'react';
class ubicacion extends React.Component{
      render(){
            return(
                  <section class="ubicacion">
                        <div class="tit"><h1>Ubícanos</h1></div>
                  <div class="mapa"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1217.0042570013009!2d-74.07685339049154!3d4.600487973222492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1658804876648!5m2!1sen!2sco" title='mapa'></iframe></div>
                        <div class="inf"><h3>AVENIDA CARRERA 8. #12A-42, BODOTA DC, COLOMBIA</h3><div class="linea"></div><h3>+57 601 4567899</h3></div>
                  </section>
            );
      }
}
export default ubicacion;