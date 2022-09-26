import React from 'react';
import './ban.css';
import slide from './slide1.jpg';
class ban extends React.Component{
      render(){
            return(
                  <section class="slider">  
            <div class="contenido">
                  <img src={slide}  id="pt" />
                  <div id="textosl">
                        <p>Lorem ipsum dolor sir ameteliter,
                              consectetur adipiscing elit.
                         </p>
                  </div> 
            </div>  
            
      </section>
            );
      }
}
export default ban;