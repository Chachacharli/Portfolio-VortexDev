import LandingSection from './components/LandingSection';
import SobreMi from './components/SobreMi/SobreMi';
import Navbar from "./components/Navbar/Navbar";
import { Trabajo } from './components/Trabajo/Trabajo';
import { Habilidades } from './components/Habilidades/Habilidades';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';


import './styles/app.css'

function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <LandingSection/>
      <SobreMi/>
      <Trabajo></Trabajo>
      <Habilidades></Habilidades>
      <Contacto></Contacto>
      <Footer></Footer>

    </div>
  );
}

export default App;
