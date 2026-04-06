import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-200 p-6">
      <header className="flex items-center gap-3 mb-8">
        <img
          src="/src/assets/learn.svg"
          alt="Logo"
          className="w-10 h-10"
        />

        <h1 className="text-lg font-semibold">Aluno Online</h1>
      </header>

      <Menu />
    </aside>
  );
}

export default Sidebar;