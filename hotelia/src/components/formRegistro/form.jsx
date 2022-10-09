import axios from "axios";
import { useState } from "react";
import logo from './HoteliaHorizontalBlanco.svg';
import './form.css';
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'

function Form(){

    const history=useNavigate();
    
    const [data,setData]=useState({
      _id:"",
      tipodoc:"",
      nombre:"",
      apellido:"",
      fnacimiento:"",
      genero:"",
      email:"",
      telefono:"",
      paisorigen:"",
      password:"",
      tipouser:"",
      foto:"",
      img:""});
    
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
            if (response.status === 201) {
                
                Swal.fire(
                    'Guardado!',
                    `El estudiante ${response.data.nombre} ${response.data.apellido} ha sido guardado exitosamente!`,
                    'success'
                )
                history.push("/");
                
            }else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al registrar el estudiante!',
                    'error'
                )
            }
        }

        return(
            <section id="container-grid">
                <div class="logo">
                    <div class="img">
                    <img src={logo} alt="logo"/>
                    <div class="bienvenido"><p>Eres más que bienvenido</p></div>
                    <div class="text"><p>un lugar en tu corazón</p></div>
                    </div>
                </div>
                    <div class="formulario1">
                            <div class="tittle"><h1>Regístrate</h1></div>
                            <div class="form1">
                        <form onSubmit={handleSubmit}>
                            <div class="doc">
                                        <div id="inf">
                                            <label for="tip-doc">Tipo de documento</label>
                                            <select name="tipodoc" value={data.tipodoc} onChange={handleChange} id="tip-doc">
                                                    <option value="0">Escoja una opción</option>
                                                    <option value="Cedula de Ciudadania">Cédula</option>
                                                    <option value="Tarjeta de Identidad">Tarjeta de identidad</option>
                                                    <option value="Otro">Otro</option>
                                            </select>
                                        </div>
                                        <div id="inf">
                                            <label for="num-doc">Número documento</label>
                                            <input type="text" name="_id" value={data._id} onChange={handleChange}  placeholder="10000000"/>
                                        </div> 
                            </div>
                            <div class="nom1">
                                <div id="inf">
                                        <label for="nombres">Nombres</label>
                                        <input type="text" name="nombre" value={data.nombre} onChange={handleChange}  placeholder="Nombres..."/>
                                </div>
                                <div id="inf">
                                        <label for="Apellidos">Apellidos</label>
                                        <input type="text" name="apellido" value={data.apellido} onChange={handleChange}  placeholder="Apellidos..."/>
                                </div> 
                            </div>
                            <div class="dat">
                                <div id="inf">
                                        <label for="FecNac">Fecha de nacimiento</label>
                                        <input type="date" name="fnacimiento" value={data.fnacimiento} onChange={handleChange} />
                                </div>
                                <div id="inf">
                                        <div class="radio1">
                                            <label for="genero">Género</label>
                                            <input type="radio" name="genero" />Mujer
                                            <input type="radio" name="genero"/>Hombre
                                            <input type="radio" name="genero"/>Otro
                                        </div>
                                </div> 
                            </div>
                            <div class="corre">
                                <div id="inf">
                                        <label for="Email">Email</label>
                                        <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="correo..."/>
                                </div>
                                <div id="inf">
                                        <label for="tel">Teléfono de contacto</label>
                                        <input type="text" name="telefono" value={data.telefono} onChange={handleChange} placeholder="teléfono..."/>
                                </div> 
                            </div>
                            <div class="orig">
                                <div id="inf">
                                        <label for="país">País deorigen</label>
                                        <select name="paísorigen" value={data.paisorigen} onChange={handleChange} id="país">
                                            <option value="0">Selecciona el Pais</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Narnia">Narnia</option>
                                            <option value="Mozambique">Mozambique</option>
                                        </select>
                                </div>
                                <div id="inf">
                                        <label for="photo">Foto</label>
                                        <input type="file" name="foto" value={data.foto} onChange={handleChange} placeholder="selecionar archivo"/>
                                </div> 
                            </div>
                            <div class="contra1">
                                        <div id="inf">
                                            <label for="password">Contraseña</label>
                                            <input type="password" name="password" value={data.password} onChange={handleChange} />
                                        </div>
                                        <div id="inf">
                                            <label for="password2">Confirmar contraseña</label>
                                            <input type="password2" name="password2"/>
                                        </div> 
                    
                            </div>
                            <div class="terminos">
                                        <p><input type="checkbox"/> Términos y condiciones</p>
                                        <button type="submit">Ingresar</button>
                            </div>
                        </form>
                                    
                        </div>  
                    </div>
                </section>

        );
}
export default Form;