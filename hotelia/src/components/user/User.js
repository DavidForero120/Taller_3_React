import axios from 'axios';
import { useEffect,useState} from "react";
import './User.css'

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
            <h1>Usuarios</h1>
            <table id="listUser" class="table table-bordered border border-dark">
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
                        <td>{us._id}</td>
                        <td>{us.tipodoc}</td>
                        <td>{us.nombre} {us.apellido}</td>
                        <td>{us.fnacimiento}</td>
                        <td>{us.genero}</td>
                        <td>{us.email}</td>
                        <td>{us.telefono}</td>
                        <td>{us.paisorigen}</td>
                        <td>{us.tipouser}</td>
                    </tr>
                ))
                }
                
            </table>
        </div>
    );
    }
export default User;