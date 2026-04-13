import Menu from "./Menu";

function Sidebar({ logo, titulo, menuItens }) {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-200 p-6">

      <header className="flex items-center gap-3 mb-8">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-lg font-semibold">{titulo}</h1>
      </header>

      <Menu itens={menuItens} />
    </aside>
  );
}

export default Sidebar;