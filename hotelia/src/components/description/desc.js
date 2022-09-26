import React from 'react';
import './desc.css'
import HoteliaNegro from './Hotelia negro vertical.svg';
class desc extends React.Component{
      render(){
            return(
                  <section class="informacion">
                  <div class="text-log">
                        <div id="hijo1"><p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en 
                              un contexo de lujo donde interactúan los negocios, el ocio y el descanso, gracias
                              a su estratégica ubicación rodeada de bancos , restaurantes de alta cocina, centros 
                              comerciales, almacenes de lujo y amblemáticos parques para aprovechar la naturaleza 
                              antre la ciudad caminar y hacer un poco de deporte al aire libre están 
                              el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
                              saludable a base de productos locales, cargados de lo mejor de la tradición colombiana.

                        </p></div>
                        <div id="hijo"><img src={HoteliaNegro} alt="logo"/></div>
                  </div>
            </section>
            );
      }
}
export default desc;