import axios from "axios";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'

function LadoIzq(){

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
            <div>
        <Container>
        <h1 className="text-center mt-3">Datos Huesped</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Select 
            name="tipodoc"
            onChange={handleChange}>
                <option>Seleccione un Tipo de Documento</option>
                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                <option value="Cédula de extranjería">Cédula de extranjería</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>No. Documento</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese su número de documento"
                name="_id" 
                value={data._id}
                onChange={handleChange}/> 
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre"
                name="nombre" 
                value={data.nombre}
                onChange={handleChange}/> 
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su apellido"
                name="apellido" 
                value={data.apellido}
                onChange={handleChange}/> 
            </Form.Group>   

            <Form.Group className="mb-3">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control 
                type="date" 
                placeholder="Fehca"
                name="fnacimiento" 
                value={data.fnacimiento}
                onChange={handleChange}/> 
            </Form.Group>  

             <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Email"
                name="email" 
                value={data.email}
                onChange={handleChange}/> 
            </Form.Group> 

            <Form.Group className="mb-3">
                <Form.Label>No. Telefono</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese su número de telefono"
                name="telefono" 
                value={data.telefono}
                onChange={handleChange}/> 
            </Form.Group>

             <Form.Group className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Select 
            name="paisorigen"
            onChange={handleChange}>
                <option>Seleccione el País de Origen</option>
                <option value="Colombia">Colombia</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Otro">Otro</option>
            </Form.Select>
            </Form.Group>           

        
            <Form.Group className="mb-3">
                <Form.Label>Foto</Form.Label>
                <Form.Control 
                type="file" 
                placeholder="Ingrese la URL de la imagen"
                name="img" 
                value={data.img}
                onChange={handleChange}/> 
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña"
                name="password" 
                value={data.password}
                onChange={handleChange}/> 
            </Form.Group>   

            <Form.Group className="mb-3">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña"
                name="clave1" 
                value={data.clave}
                onChange={handleChange}/> 
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Tipo Usuario</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su contraseña"
                name="tipousuario" 
                value={data.tipousuario}
                onChange={handleChange}/> 
            </Form.Group>   

            
            
            <button className="btn btn-primary">Guardar</button>
        </Form>
        </Container>
        </div>

        );
}
export default LadoIzq;