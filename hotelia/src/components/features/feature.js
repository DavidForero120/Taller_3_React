import React from 'react';
import './feature.css'
class feature extends React.Component{
      render(){
            return(
      <section id="features">
            <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
            <div class="features-description">
                  <div class="feature feature-blue">
                        <i class="fa-solid fa-bell-concierge"></i>
                        <p>Lorem ipsum dolor</p>
                  </div>
                  <div class="feature feature-black">
                        <i class="fa-solid fa-bed"></i>
                        <p>Lorem ipsum dolor</p>
                  </div>
                  <div class="feature feature-blue">
                        <i class="fa-solid fa-wifi"></i>
                        <p>Lorem ipsum </p>
                  </div>
                  <div class="feature feature-black">
                        <i class="fa-solid fa-dumbbell"></i>
                        <p>Lorem ipsum </p>
                  </div>

            </div>
      </section>
            );
      }
}
export default feature;