import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import userLogo from './pvacia.webp';

import './dashboard.css';


function Dashboard(){
    return(


      <div className="body__dash">
            <Sidebar />

            <section class="datos">
                  <div class="formulario">
                        <div class="titulo__dash">
                              <h1 className="h1__dash">Bienvenido Usuario</h1> 
                        </div>
                        <div class="info">
                              <div class="logo-img">
                                    <img src={userLogo} alt="User Logo" className="img__dash"/>
                                    <div class="carga">
                                          <div id="log-des"><i class="fa-solid fa-file-arrow-up i__dash" ></i></div>
                                          <div id="log1-des"><i class="fa-solid fa-upload i__dash" ></i></div>
                                    </div>
                                    <button className="button__dash">Cambiar Contraseña</button>
                              </div>
                              <div class="form">
                                    <div class="doc">
                                          <div id="inf">
                                                <label for="tip-doc" className="label__dash">Tipo de documento</label>
                                                <input type="text" name="tip-doc" placeholder="CC" className="input__dash"/>
                                          </div>
                                          <div id="inf">
                                                <label for="num-doc" className="label__dash">Número documento</label>
                                                <input type="text" name="num-doc" placeholder="10000000" className="input__dash"/>

                                          </div>
                                          
                                          
                                    </div>
                                    <div class="nom">
                                          <div id="inf">
                                                <label for="nombre" className="label__dash">Nombres</label>
                                                <input type="text" name="nombre" placeholder="Nombre.." className="input__dash"/>
                                          </div>
                                          <div id="inf">
                                                <label for="Apellido" className="label__dash">Apellidos</label>
                                                <input type="text" name="Apellido" placeholder="Apellidos.." className="input__dash"/>

                                          </div>
                                    </div>
                                    <div class="origen">

                                          <div id="inf">
                                                <label for="fecha" className="label__dash">Fecha nacimiento</label>
                                                <input type="text" name="fecha" placeholder="DD/MM/YY" className="input__dash"/>
                                          </div>
                                          <div id="inf">
                                                <label for="origen" className="label__dash">País de origen</label>
                                                <input type="text" name="origen" placeholder="País.." className="input__dash"/>

                                          </div>
                                    </div>
                                    <div class="genero">
                                          <div id="inf">
                                                <div class="radio">
                                                <label for="fecha" className="label__dash">Género</label>
                                                <input type="radio" name="genero" className="input__dash"/>Mujer
                                                <input type="radio" name="genero" className="input__dash"/>Hombre
                                                <input type="radio" name="genero" className="input__dash"/>Otro
                                                </div>
                                          </div>
                                          <div id="inf">
                                                <label for="tel" className="label__dash">Teléfono de contacto</label>
                                                <input type="text" name="tel" placeholder="Teléfono" className="input__dash"/>

                                          </div>

                                    </div>
                                    <div class="act">
                                          <div class="inf">
                                                <button className="button__dash">Actualizar</button>
                                          </div>

                                    </div>
                                    <div class="contra">
                                          <div id="inf">
                                                <label for="password" className="label__dash">Contraseña</label>
                                                <input type="password" name="password" className="input__dash"/>
                                          </div>
                                          <div id="inf">
                                                <label for="passwordd" className="label__dash">Confirmar contraseña</label>
                                                <input type="password" name="passwordd" className="input__dash"/>

                                          </div>

                                    </div>
                                    <div class="cambio">
                                          <div class="inf">
                                                <button className="button__dash">Cambiar</button>
                                          </div>

                                    </div>

                              </div>

                        </div>
                        
                                  
                  </div>
                  
                        
            </section>
      </div>

      
    );
}

export default Dashboard;