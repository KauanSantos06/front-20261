function Menu({ itens }) {
  return (
    <nav>
      <ul className="space-y-4 text-gray-700">
        {itens.map((item, index) => (
          <li 
            key={index}
            className="hover:text-black cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;