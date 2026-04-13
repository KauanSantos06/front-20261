import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Faltas() {
  return (
    <section className="flex h-screen bg-gray-100">

      <Sidebar
        logo="/src/assets/learn.svg"
        titulo="Aluno Online"
        menuItens={[
          "Dashboard",
          "Notas",
          "Faltas",
          "Boletos",
          "Requerimentos",
          "Sair"
        ]}
      />

      <main className="flex-1 p-6">

        <Topbar 
          titulo="Minhas Faltas" 
          avatar="/src/assets/user.svg" 
        />

        <section className="p-8 rounded shadow bg-white">

          <header>
            <h2 className="text-lg font-semibold mb-4">
              Histórico de Faltas por Semestre
            </h2>
          </header>

          {/* 2026.1 */}
          <section>
            <h3 className="text-md font-semibold mb-2 mt-4">2026.1</h3>

            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Disciplina</th>
                  <th className="p-2">Total de Faltas</th>
                  <th className="p-2">% de Presença</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">BI e Data Warehousing</td>
                  <td className="p-2">0</td>
                  <td className="p-2">100%</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">Construção de Frontend</td>
                  <td className="p-2">0</td>
                  <td className="p-2">100%</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">Manutenção de Software e Devops</td>
                  <td className="p-2">0</td>
                  <td className="p-2">100%</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 2025.2 */}
          <section>
            <h3 className="text-md font-semibold mb-2 mt-6">2025.2</h3>

            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Disciplina</th>
                  <th className="p-2">Total de Faltas</th>
                  <th className="p-2">% de Presença</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">Construção de Backend</td>
                  <td className="p-2">27</td>
                  <td className="p-2">87.5%</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">Estrutura de Dados</td>
                  <td className="p-2">9</td>
                  <td className="p-2">85%</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">Gerenciamento de Projetos</td>
                  <td className="p-2">10.5</td>
                  <td className="p-2">82.5%</td>
                </tr>
              </tbody>
            </table>
          </section>

        </section>
      </main>
    </section>
  );
}

export default Faltas;