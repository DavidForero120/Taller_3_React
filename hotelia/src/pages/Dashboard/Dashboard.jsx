import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import userLogo from './pvacia.webp';

import './dashboard.css'

function Dashboard(){
    return(


      <div className="sidebar-Container">
            <Sidebar />

            <section class="datos">
                  <div class="formulario">
                        <div class="titulo">
                              <h1>Bienvenido Usuario</h1> 
                        </div>
                        <div class="info">
                              <div class="logo-img">
                                    <img src={userLogo} alt="User Logo" />
                                    <div class="carga">
                                          <div id="log-des"><i class="fa-solid fa-file-arrow-up"></i></div>
                                          <div id="log1-des"><i class="fa-solid fa-upload"></i></div>
                                    </div>
                                    <button>Cambiar Contraseña</button>
                              </div>
                              <div class="form">
                                    <div class="doc">
                                          <div id="inf">
                                                <label for="tip-doc">Tipo de documento</label>
                                                <input type="text" name="tip-doc" placeholder="CC"/>
                                          </div>
                                          <div id="inf">
                                                <label for="num-doc">Número documento</label>
                                                <input type="text" name="num-doc" placeholder="10000000"/>

                                          </div>
                                          
                                          
                                    </div>
                                    <div class="nom">
                                          <div id="inf">
                                                <label for="nombre">Nombres</label>
                                                <input type="text" name="nombre" placeholder="Nombre.."/>
                                          </div>
                                          <div id="inf">
                                                <label for="Apellido">Apellidos</label>
                                                <input type="text" name="Apellido" placeholder="Apellidos.."/>

                                          </div>
                                    </div>
                                    <div class="origen">

                                          <div id="inf">
                                                <label for="fecha">Fecha nacimiento</label>
                                                <input type="text" name="fecha" placeholder="DD/MM/YY"/>
                                          </div>
                                          <div id="inf">
                                                <label for="origen">País de origen</label>
                                                <input type="text" name="origen" placeholder="País.."/>

                                          </div>
                                    </div>
                                    <div class="genero">
                                          <div id="inf">
                                                <div class="radio">
                                                <label for="fecha">Género</label>
                                                <input type="radio" name="genero"/>Mujer
                                                <input type="radio" name="genero"/>Hombre
                                                <input type="radio" name="genero"/>Otro
                                                </div>
                                          </div>
                                          <div id="inf">
                                                <label for="tel">Teléfono de contacto</label>
                                                <input type="text" name="tel" placeholder="Teléfono"/>

                                          </div>

                                    </div>
                                    <div class="act">
                                          <div class="inf">
                                                <button>Actualizar</button>
                                          </div>

                                    </div>
                                    <div class="contra">
                                          <div id="inf">
                                                <label for="password">Contraseña</label>
                                                <input type="password" name="password"/>
                                          </div>
                                          <div id="inf">
                                                <label for="passwordd">Confirmar contraseña</label>
                                                <input type="password" name="passwordd"/>

                                          </div>

                                    </div>
                                    <div class="cambio">
                                          <div class="inf">
                                                <button>Cambiar</button>
                                          </div>

                                    </div>

                              </div>

                        </div>
                        
                                  
                  </div>
                  
                        
            </section>
      </div>

      
        /*
       */
    );
}

export default Dashboard;