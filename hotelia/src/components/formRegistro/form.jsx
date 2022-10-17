import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import './form.css';
import image from './HoteliaHorizontalBlanco.svg';

function Formulario(){
    const history=useNavigate();

    const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",
    fnacimiento:"",genero:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});
  
    const handleChange=({target})=>{
          setData({
                ...data,
                [target.name]:target.value
          })
    }

  const url="https://hoteliakuepa.herokuapp.com/users";  

      const handleSubmit=async(e)=>{
          e.preventDefault();
          const response=await axios.post(url,data);
          if (response.status === 201) 
          {
                Swal.fire(
                      'Error!',
                      'Hubo un problema al registrar el huesped!',
                      'error'
                )
              
          }
          else {
                Swal.fire(
                      'Guardado!',
                      `El huesped ha sido guardado exitosamente!`,
                      'success'
                )
          }
      }

      return(
          <div class="formulario_R">
                <div id="CR">
                  <div id="Side_r">
                        <div id="logo_r"><img src={image} alt="logo"></img></div>
                        <div  id="lugar_r"><h1>Eres mas que bienvenido</h1></div>
                  </div>
                  <div id="registro_r">
                        <div class="tittle_r"><h1>Regístrate</h1></div>
                        <Form class="form_r" onSubmit={handleSubmit}>

                        <div class="info_r">
                                    <div className="form_camp">
                                          <div><label className="la">Tipo de documento:</label></div>
                                          <select name="tipodoc" onChange={handleChange}>
                                                <option>Escoja una opción</option>
                                                <option value="Cédula">Cédula</option>
                                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                                <option value="Otro">Otro</option>
                                          </select>
                                                                           
                              
                                    </div>
                                    <div className="form_camp">
                                          <div><label className="la">Número documento:</label></div>
                                          <input className="in" type="number" placeholder="Ingrese su número de documento" name="_id" value={data._id} onChange={handleChange}/>
                                    </div>
                              </div>
                        
                              

                              <div class="info_r">
                                    <div className="form_camp">
                                          <div><label className="la">Nombres:</label></div>
                                          <input className="in"  type="text" placeholder="Ingrese su nombre" name="nombre" value={data.nombre} onChange={handleChange}/>
                                                                           
                              
                                    </div>
                                    <div className="form_camp">
                                          <div><label className="la">Apellidos:</label></div>
                                          <input className="in" type="text" placeholder="Ingrese su apellido" name="apellido" value={data.apellido} onChange={handleChange}/>
                                    </div>
                              </div>

                              

                              <div class="info_r">
                                    <div className="form_camp">
                                          <div><label className="la">Fecha de nacimiento:</label></div>
                                          <input className="in" type="date" placeholder="Fecha" name="fnacimiento" value={data.fnacimiento} onChange={handleChange}/>
                                                                           
                              
                                    </div>
                                    <div className="form_camp">
                                          <div><label className="la">Email:</label></div>
                                          <input className="in" type="text" placeholder="Email" name="email" value={data.email} onChange={handleChange}/>
                                    </div>
                              </div>

                              <div class="info_r">
                                    <div className="form_camp">
                                          <div><label className="la">Teléfono de contacto:</label></div>
                                          <input className="in" type="number" placeholder="Ingrese su número de telefono" name="telefono" value={data.telefono} onChange={handleChange}/>
                                                                           
                              
                                    </div>
                                    <div className="form_camp">
                                          <div><label className="la">País de origen:</label></div>
                                          <select name="paisorigen" onChange={handleChange}>
                                                <option>Escoja una opción:</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Otro">Otro</option>
                                          </select>
                                    </div>
                              </div>

                              <div class="info_r">
                                    <div className="form_camp">
                                          <div><label className="la">Foto:</label></div>
                                          <input className="in" type="file" placeholder="Ingrese la URL de la imagen" name="img" value={data.img} onChange={handleChange}/>
                                                                           
                              
                                    </div>
                                    <div className="form_camp">
                                          <div><label className="la">Tipo de Usuario:</label></div>
                                          <input className="in" type="text" placeholder="Ingrese su rol" name="tipouser" value={data.tipouser} onChange={handleChange}/>
                                    </div>
                              </div>

                              <div class="info_r">
                                    <div className="form_camp">
                                          <div><label className="la">Contraseña:</label></div>
                                          <input className="in"  type="password" placeholder="Ingrese su contraseña" name="password" value={data.password} onChange={handleChange}/>
                                                                           
                              
                                    </div>
                                    <div className="form_camp">
                                          <div><label className="la">Confirmar Contraseña:</label></div>
                                          <input className="in" type="password" placeholder="Ingrese su contraseña"/>
                                    </div>
                              </div>


                              <div class="info_r2">
                                    <Link to="/usuario"><p id="termino"><input type="checkbox"/>Términos y condiciones</p></Link>
                              </div>
                              
                              <div class="info_r2">
                                    <button className="boton234" onClick={handleSubmit}>Guardar</button>
                              </div>

                        </Form>
                  </div>
                
               
                </div>
          </div>



      );
}
export default Formulario;