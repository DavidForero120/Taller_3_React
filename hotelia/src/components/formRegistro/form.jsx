import logo from './HoteliaHorizontalBlanco.svg';
import './form.css';
import {Link} from 'react-router-dom';
function form(){
      return(
            <section id="container-grid">
                  <div class="logo">
                <div class="img">
                        <img src={logo} alt="logo"/>
                        <div class="bienvenido"><p>Eres más que bienvenido</p></div>
                        <div class="text"><p>un lugar en tu corazón</p></div>
                  </div>
            </div>
                              <div class="formulario">
                              <div class="tittle"><h1>Regístrate</h1></div>
                        <div class="form">
                              <div class="doc">
                                          <div id="inf">
                                                <label for="tip-doc">Tipo de documento</label>
                                                <select name="tip-doc" id="tip-doc">
                                                      <option value="0">Escoja una opción</option>
                                                      <option value="1">Cédula</option>
                                                      <option value="2">Tarjeta de identidad</option>
                                                      <option value="3">Otro</option>
                                                </select>
                                          </div>
                                          <div id="inf">
                                                <label for="num-doc">Número documento</label>
                                                <input type="text" name="num-doc" placeholder="10000000"/>
                                          </div> 
                              </div>
                              <div class="nom">
                                    <div id="inf">
                                          <label for="nombres">Nombres</label>
                                          <input type="text" name="nombres" placeholder="Nombres..."/>
                                    </div>
                                    <div id="inf">
                                          <label for="Apellidos">Apellidos</label>
                                          <input type="text" name="Apellidos" placeholder="Apellidos..."/>
                                    </div> 
                              </div>
                              <div class="dat">
                                    <div id="inf">
                                          <label for="FecNac">Fecha de nacimiento</label>
                                          <input type="date" name="FecNac"/>
                                    </div>
                                    <div id="inf">
                                          <div class="radio">
                                                <label for="fecha">Género</label>
                                                <input type="radio" name="genero"/>Mujer
                                                <input type="radio" name="genero"/>Hombre
                                                <input type="radio" name="genero"/>Otro
                                          </div>
                                    </div> 
                              </div>
                              <div class="corre">
                                    <div id="inf">
                                          <label for="Email">Email</label>
                                          <input type="email" name="Email" placeholder="correo..."/>
                                    </div>
                                    <div id="inf">
                                          <label for="tel">Teléfono de contacto</label>
                                          <input type="text" name="tel" placeholder="teléfono..."/>
                                    </div> 
                              </div>
                              <div class="orig">
                                    <div id="inf">
                                          <label for="país">País deorigen</label>
                                          <select name="país" id="país">
                                                <option value="1">option1</option>
                                                <option value="2">option2</option>
                                                <option value="3">option3</option>
                                                <option value="4">option4</option>
                                                <option value="5">option5</option>
                                          </select>
                                    </div>
                                    <div id="inf">
                                          <label for="photo">Foto</label>
                                          <input type="text" name="photo" placeholder="selecionar archivo"/>
                                    </div> 
                              </div>
                              <div class="contra">
                                          <div id="inf">
                                                <label for="password">Contraseña</label>
                                                <input type="password" name="password"/>
                                          </div>
                                          <div id="inf">
                                                <label for="password2">Confirmar contraseña</label>
                                                <input type="password2" name="password2"/>
                                          </div> 
                        
                        </div>
                              <div class="terminos">
                                          <a href="condiciones.html"><p><input type="checkbox"/> Términos y condiciones</p></a>
                                          <Link to="/user"><button>Ingresar</button></Link>
                              </div>          
                        </div>  
                  </div>
            </section>
         
      );
}
export default form;