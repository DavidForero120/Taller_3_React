import React from 'react';

import hoteliaLogo from './Hotelia horizontal negro.svg';
import './login.css'

function Login(){
  return(
      <section>
      <div id="logo">
        <a href="#"><img src={hoteliaLogo} alt="Logo Hotelia" /></a>
      </div>
      <div className="login">
        <form action="">

          <div className="iniciosesion">
            <label htmlFor="">Usuario</label>
            <input type="text" name="" id="" />
          </div>
          <div className="iniciosesion">
            <label htmlFor="">Contraseña</label>
            <input type="password" name="" id="" />
          </div>
          
          <button id="boton"><a href="#">Ingresar</a></button>
          <p>¿No tienes una cuenta?<a href="registro.html">Regístrate aquí.</a> </p>
        </form>
      </div>
    </section>
    
    
  );
}
export default Login;