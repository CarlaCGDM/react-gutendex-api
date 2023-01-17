import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from "./components/vistas/Inicio";
import Contacto from "./components/vistas/Contacto";
import Login from "./components/vistas/Login";
import Registro from "./components/vistas/Registro";
import Perfil from "./components/vistas/Perfil";
import Detalle from "./components/vistas/Detalle";

function App() {
  return (
    <div className="contenedor">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/libros/:id" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registro" element={<Registro />}/>
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}

export default App;
