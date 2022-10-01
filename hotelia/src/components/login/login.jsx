import React from 'react';
import {Link} from 'react-router-dom';
import hoteliaLogo from './Hotelia horizontal negro.svg';

import './login.css';

function Login(){
    return(
      <main className='body'>
        <section id='section__login'>
            <div id="logo">
              <img src={hoteliaLogo} alt="Logo Hotelia" className='img__login'/>
            </div>
            <div className="login">
                <i class="fa-solid fa-user i__login" ></i>
              <form action="" className='form__login'>

                <div className="iniciosesion">
                  <label htmlFor="" className='label__login'>Usuario</label>
                  <input type="text" name="" id="" className='input__login'/>
                </div>
                <div className="iniciosesion">
                  <label htmlFor="" className='label__login'>Contraseña</label>
                  <input type="password" name="" id="" className='input__login' />
                </div>
                
                <button id="boton" className='button__login'><Link to="/DASH" >Ingresar</Link></button>
                <p className='p__login'>¿No tienes una cuenta?<Link to="/registro">Regístrate aquí.</Link> </p>
              </form>
            </div>
    </section>
      </main>
      
    
    
  );
}
export default Login;