import axios from "axios";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';

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
          <div class="formulario">
                <Container>
                <div class="tittle"><h1>Regístrate</h1></div>
                <Form class="form" onSubmit={handleSubmit}>
                      <div class="doc">
                            <div class="info">
                                  <label className="la">Tipo de documento</label>
                                  <select name="tipodoc" onChange={handleChange}>
                                        <option>Escoja una opción</option>
                                        <option value="Cédula">Cédula</option>
                                        <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                        <option value="Otro">Otro</option>
                                  </select>
                            </div>
                            <div class="info">
                                  <label className="la">Número documento</label>
                                  <input className="in" type="number" placeholder="Ingrese su número de documento" name="_id" value={data._id} onChange={handleChange}/>
                            </div> 
                      </div>
                      <div class="nam">
                            <div class="info">
                                  <label className="la">Nombres</label>
                                  <input className="in"  type="text" placeholder="Ingrese su nombre" name="nombre" value={data.nombre} onChange={handleChange}/>
                            </div>
                            <div class="info">
                                  <label className="la">Apellidos</label>
                                  <input className="in" type="text" placeholder="Ingrese su apellido" name="apellido" value={data.apellido} onChange={handleChange}/>
                            </div> 
                      </div>
                      <div class="nac">
                            <div class="info">
                                  <label className="la">Fecha de nacimiento</label>
                                  <input className="in" type="date" placeholder="Fecha" name="fnacimiento" value={data.fnacimiento} onChange={handleChange}/>
                            </div>
                            <div class="info">
                                  <label className="la">Email</label>
                                  <input className="in" type="text" placeholder="Email" name="email" value={data.email} onChange={handleChange}/>
                            </div>
                      </div>
                      <div class="em">
                            <div class="info">
                                  <label className="la">Teléfono de contacto</label>
                                  <input className="in" type="number" placeholder="Ingrese su número de telefono" name="telefono" value={data.telefono} onChange={handleChange}/>
                            </div> 
                            <div class="info">
                                  <label className="la">País deorigen</label>
                                  <select name="paisorigen" onChange={handleChange}>
                                        <option>Escoja una opción</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Otro">Otro</option>
                                  </select>
                            </div>
                      </div>
                      <div class="coun">
                            <div class="info">
                                  <label className="la">Foto</label>
                                  <input className="in" type="file" placeholder="Ingrese la URL de la imagen" name="img" value={data.img} onChange={handleChange}/>
                            </div> 
                            <div class="info">
                                  <label className="la">Tipo de Usuario</label>
                                  <input className="in" type="text" placeholder="Ingrese su rol" name="tipouser" value={data.tipouser} onChange={handleChange}/>
                            </div> 
                      </div>
                      <div class="pass">
                            <div class="info">
                                  <label className="la">Contraseña</label>
                                  <input className="in"  type="password" placeholder="Ingrese su contraseña" name="password" value={data.password} onChange={handleChange}/>
                            </div>
                            <div class="info">
                                  <label className="la">Confirmar Contraseña</label>
                                  <input className="in" type="password" placeholder="Ingrese su contraseña"/>
                            </div>
                      </div>
                      <p id="termino"><input type="checkbox"/>Términos y condiciones</p>
                      <button className="boton234" onClick={handleSubmit}>Guardar</button>
                      <div className="modalito" id="modalito">
                            <div className="modal_cotainer" id="modal_container">
                                  <span id="close" className="material-symbols-outlined">X</span>
                                  <h1>Terminos y condiciones</h1>
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque atque, unde officiis sapiente quis aperiam quas perferendis odit ipsam velit exercitationem ratione repudiandae cupiditate tempore laborum nemo iusto, aliquam dolorem!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis voluptatem inventore dolorem eum delectus ratione sapiente veritatis doloribus, ipsam laboriosam et dolorum velit ab fugit! Harum consequatur voluptates sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus laboriosam, qui sit accusantium iure fuga quos beatae illum, fugiat iste soluta incidunt, molestias id inventore? Pariatur suscipit error iure.</p>
                            </div>
                      </div>
                </Form>
                </Container>
          </div>



      );
}
export default Formulario;