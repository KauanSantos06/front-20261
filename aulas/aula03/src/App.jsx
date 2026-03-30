function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR (some no celular) */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-200 p-6">
        <header className="flex items-center gap-3 mb-8">
          
          {/* LOGO */}
          <img 
            src="/learn.svg"
            alt="Logo"
            className="w-10 h-10"
          />

          <h1 className="text-lg font-semibold">Aluno Online</h1>
        </header>

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
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-6 md:mb-8">
          
          <h1 className="text-2xl md:text-3xl font-bold">
            Olá, Aluno!
          </h1>

          {/* AVATAR */}
          <img 
            src="/user.svg"
            alt="Avatar"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </header>

        <h2 className="text-lg md:text-xl font-semibold mb-6">
          Bem-vindo ao portal do aluno
        </h2>

        {/* CARDS */}
        <section className="space-y-6">

          <article className="bg-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-300 px-4 py-2 font-semibold">
              Mural de Avisos
            </div>
            <div className="p-4 text-gray-700 space-y-1">
              <p>Inscrição para o projeto de extensão</p>
              <p>Eleição para representante de turma</p>
            </div>
          </article>

          <article className="bg-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-300 px-4 py-2 font-semibold">
              Calendário Acadêmico
            </div>
            <div className="p-4 text-gray-700 space-y-1">
              <p>23/02 - Início do período letivo 2026-1</p>
              <p>25/04 - Prazo final para aplicação da P1</p>
              <p>23/06 - Prazo final para aplicação da P2</p>
              <p>04/07 - Fim do período letivo 2026-1</p>
            </div>
          </article>

          <article className="bg-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-300 px-4 py-2 font-semibold">
              Minhas Disciplinas
            </div>
            <div className="p-4 text-gray-700 space-y-1">
              <p>BI e Data Warehousing</p>
              <p>Construção de Frontend</p>
            </div>
          </article>

        </section>
      </main>
    </div>
  );
}

export default App;