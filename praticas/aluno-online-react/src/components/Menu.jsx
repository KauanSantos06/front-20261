import { NavLink, Link, useNavigate } from 'react-router';
import { useAuth } from "../contexts/useAuth";

function Menu() {

 const {logout, usuario} = useAuth();

 const navigate = useNavigate();

 const handleSair = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
 }

   return <nav>
        <h1> Olá {usuario.nome}</h1>
        <ul>
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/faltas">Faltas</NavLink></li>
          <li><NavLink to="/boletos">Boletos</NavLink></li>
          <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
          <li><NavLink to="/notas">Notas</NavLink></li>
          <li><a href="#" onClick={handleSair}> Sair </a></li>
        </ul>
      </nav>
}

export default Menu;