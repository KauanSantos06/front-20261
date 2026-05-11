import { NavLink, Link } from 'react-router';
function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/faltas">Faltas</NavLink></li>
          <li><NavLink to="/boletos">Boletos</NavLink></li>
          <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
          <li><NavLink to="/notas">Notas</NavLink></li>
          <li><Link to="/login">Sair</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;