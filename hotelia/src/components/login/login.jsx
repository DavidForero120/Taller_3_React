import React from 'react';
import {Link} from 'react-router-dom';
import hoteliaLogo from './Hotelia horizontal negro.svg';

import './login.css';

function Login(){
    return(
      <main className='body'>
        <section id='section__login'>
            <div id="logo">
              <img src={hoteliaLogo} alt="Logo Hotelia" />
            </div>
            <div className="login">
              <form action="">

                <div className="iniciosesion">
                  <label htmlFor="" className='label'>Usuario</label>
                  <input type="text" name="" id="" className='input'/>
                </div>
                <div className="iniciosesion">
                  <label htmlFor="" className='label'>Contraseña</label>
                  <input type="password" name="" id="" className='input' />
                </div>
                
                <button id="boton" className='button'><Link to="/dasboard" >Ingresar</Link></button>
                <p className='p'>¿No tienes una cuenta?<Link to="/registro">Regístrate aquí.</Link> </p>
              </form>
            </div>
    </section>
      </main>
      
    
    
  );
}
export default Login;