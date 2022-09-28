import Nav from '../components/NAV/nav';
import Banner from '../components/banner/ban';
import Descripcion from '../components/description/desc';
import Feature from '../components/features/feature';
import Ubicacion from '../components/locate/ubicacion';
import Opiniones from '../components/opiniones/opinion';
import Footer from '../components/footer/footer';
function Inicio(){
      return(
       <div className="container">
            <Nav />
            <Banner />
            <Descripcion />
            <Feature />
            <Ubicacion />
            <Opiniones />
            <Footer />
       </div>     
      );
}
export  default Inicio;