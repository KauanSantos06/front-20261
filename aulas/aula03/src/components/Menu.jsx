function Menu() {
  return (
    <nav>
      <ul className="space-y-4 text-gray-700">
        <li className="hover:text-black cursor-pointer">Dashboard</li>
        <li className="hover:text-black cursor-pointer">Notas</li>
        <li className="hover:text-black cursor-pointer">Faltas</li>
        <li className="hover:text-black cursor-pointer">Boletos</li>
        <li className="hover:text-black cursor-pointer">Requerimentos</li>
        <li className="hover:text-black cursor-pointer">Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;