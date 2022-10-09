import React from 'react';
import './desc.css'
import HoteliaNegro from './Hotelia negro vertical.svg';

import Ubi from '../../props/Tubicacion';

class desc extends React.Component{
      render(){
            return(
                  <section class="informacion">
                  <div class="text-log">
                        <div id="hijo1"><Ubi /></div>
                        <div id="hijo"><img src={HoteliaNegro} alt="logo"/></div>
                  </div>
            </section>
            );
      }
}
export default desc;