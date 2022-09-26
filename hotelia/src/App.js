

import NAVB from './components/NAV/nav'
import BANNER from './components/banner/ban';
import DESCRIPCION from './components/description/desc';
import FEATURE from './components/features/feature';
import LOCATE from './components/locate/ubicacion';
import OPINION from './components/opiniones/opinion';
import FOOTER from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <section className='nav'>
        < NAVB />
      </section>
      <div className='ban'>
        < BANNER/>
      </div>
      <div className='desc'>
        <DESCRIPCION />
      </div>
      <div className='feature'>
        <FEATURE />
      </div>
      <div className='ubicacion'>
        <LOCATE />
      </div>
      <div className='opiniones'>
        <OPINION />
      </div>
      <div className='footer'>
        <FOOTER />
      </div>
    </div>
  );
}

export default App;
