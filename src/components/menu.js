import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (<>
    <div>
        <ul>
            <li>
                <NavLink to="/tajante">Calcular grados</NavLink>
            </li>
            <li>
                <NavLink to="/Formulario">Formulario</NavLink>
            </li>
            <li>
                <NavLink to="/Operaciones">Suma y Multiplicación</NavLink>
            </li>
        </ul>
    </div>
    </>)
}