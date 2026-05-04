import './Menu.css';
import { NavLink} from 'react-router';

function Menu (){
    return <nav>
        <ul>
            <li> <NavLink to="/"> Home </NavLink></li>
            <li> <NavLink to="/perfil"> Perfil de Usuario </NavLink></li>
            <li> <NavLink to="/settings"> Configurações </NavLink></li>
            <li> <NavLink to="/about"> Sobre </NavLink></li>     
        </ul>
    </nav>
}

export default Menu;