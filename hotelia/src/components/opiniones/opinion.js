import React from 'react';
import perfil from './perfil.png';
import './opiniones.css';
import TXT from '../../props/lorem'
class opinion extends React.Component{
      render(){
            return(
                  <section class="opiniones">
                  <div class="titulo"><h1>Nuestros usuarios dicen...</h1></div>
                  <div class="carrusel">   
                              <div id="op" >
                                    <div class="enc">
                                    <img src={perfil} alt="perfil"/>
                                    <div class="estrellas">
                                          <h5>Diego rodriguez</h5>
                                          <div>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                </div>
                                    </div>
                                    </div>
                                    <div class="ip"><TXT /></div>
                              </div>
                              <div id="op">
                                    <div class="enc">
                                          <img src={perfil} alt="perfil" />
                                          <div class="estrellas">
                                                <h5>Diana Garcia</h5>
                                                <div>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                </div>
                                                
                                          </div>
                        
                                          </div>
                                          <div class="ip"><TXT /></div>
                              </div>
                              <div id="op">
                                    <div class="enc">
                                          <img src={perfil} alt="perfil" />
                                          <div class="estrellas">
                                                <h5>Diego rodriguez</h5>
                                                <div>
                                                      <i class="fa-solid fa-star"></i>
                                                      <i class="fa-solid fa-star"></i>
                                                      <i class="fa-solid fa-star"></i>
                                                      <i class="fa-solid fa-star"></i>
                                                      <i class="fa-regular fa-star"></i>
                                                      </div>
                                          </div>
                                          
                                          </div>
                                          <div class="ip"><TXT /></div>
                              </div>
                  </div>
      
            </section>  
            );
      }
}
export default opinion;