import axios from 'axios';
import { useEffect,useState} from "react";
import './User.css'
import {Link} from 'react-router-dom';
function User(){

    /*1. Definir url del api, generar peticiones asíncronas */
    const url="https://hoteliakuepa.herokuapp.com/users";

    /*2. Creó función para conectarse a la api y ejecutar petición tipo get */
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado*/
    const [list,setList]=useState([]);

    /*4 usseEfect para ejecutar funciones desde el inicio del renderizado */
    useEffect(()=>{
        getData().then((response)=>{ //promesa
            setList(response.data); //escribir en el useState List
        })
    },[])

    
    console.log(list)
    
    return(
        <div id="UserList">
             <Link to="/car"><button>Actualizar usuario</button></Link>
             <Link to="/registro"><button>Registrar usuario</button></Link>
            <h1>Usuarios</h1>
            <table id="listUser" class="table table-sm">
                <tr>
                    <th class="border border-4" id='dates'>No. Documento</th>
                    <th class="border border-4" id='dates'>Tipo <br/> Documento</th>
                    <th class="border border-4" id='dates'>Nombre Apellido</th>
                    <th class="border border-4" id='dates'>Fecha nacimiento</th>
                    <th class="border border-4" id='dates'>Genero</th>
                    <th class="border border-4" id='dates'>Telefono</th>
                    <th class="border border-4" id='dates'>Correo</th>
                    <th class="border border-4" id='dates'>Pais de origen</th>
                    <th class="border border-4" id='dates'>tipo usuario</th>
                    
                </tr>
                {list.map((us,index)=>(
                    <tr id="encList">
                        <td class="border border-4">{us._id}</td>
                        <td class="border border-4">{us.tipodoc}</td>
                        <td class="border border-4">{us.nombre} {us.apellido}</td>
                        <td class="border border-4">{us.fnacimiento}</td>
                        <td class="border border-4">{us.genero}</td>
                        <td class="border border-4">{us.email}</td>
                        <td class="border border-4">{us.telefono}</td>
                        <td class="border border-4">{us.paisorigen}</td>
                        <td class="border border-4">{us.tipouser}</td>
                    </tr>
                ))
                }
                
            </table>
        </div>
    );
    }
export default User;