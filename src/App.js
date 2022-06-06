import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./tajante.css";
import "./Formulario.css";
import "./Operandus.css";

import Tajante from "./Pages/tajante";
import Formulario from "./Pages/Formulario";
import Operandus from "./Pages/Operandus";

import Menu from "./components/menu";

export default function App() {
    return (<>
        <div className="app">
            <h1>"Welcome to the better see"</h1>
            <p>Este trabajo fue realizado por <strong>Cesar Flores Andres Daniel</strong> del grupo: <i>TI51BIS</i>.</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/tajante" element={<Tajante />} />
                    <Route path="/Formulario" element={<Formulario />} />
                    <Route path="/Operaciones" element={<Operandus />} />
                </Routes>

                <Menu />
            </BrowserRouter>
        </div>
    </>)
}