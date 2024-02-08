import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Registro from './components/Registro';
import Home from './components/Home';
import AgregarPersona from './components/AgregarPersona';
import ListadoPersonas from './components/ListadoPersonas';
import CensadosTotales from './components/CensadosTotales';
import PersonasPorDepartamento from './components/graficas/PersonasPorDepartamento';
import PersonasPorOcupacion from './components/graficas/PersonasPorOcupacion';
import MapaUsuarios from './components/MapaUsuarios';
import PorcentajeCensados from './components/PorcentajeCensados';
import FinCenso from './components/FinCenso';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/AgregarPersona" element={<AgregarPersona />}></Route>
        <Route path="/ListadoPersonas" element={<ListadoPersonas />}></Route>
        <Route path="/CensadosTotales" element={<CensadosTotales />}></Route>
        <Route path="/PersonasPorDepartamento" element={<PersonasPorDepartamento />}></Route>
        <Route path="/PersonasPorOcupacion" element={<PersonasPorOcupacion />}></Route>
        <Route path="/UsuariosPorDepartamento" element={<MapaUsuarios />}></Route>
        <Route path="/PorcentajeCensados" element={<PorcentajeCensados />}></Route>
        <Route path="/FinCenso" element={<FinCenso />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
