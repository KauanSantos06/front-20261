import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <>
        <section className="flex h-screen bg-gray-100">

        <Sidebar />

        <main className="flex-1 p-6">

            {/* Topo */}
            <header className="mb-6">
            <Topbar titulo="Minhas Notas" />
            </header>

            <h2  className="text-lg font-semibold mb-4"> 
                Histórico de Notas por Semestre
            </h2>

            {/* Tabela 2025.1 */}
            <section className="bg-white p-4 rounded shadow mb-6">

            <h2 className="font-semibold mb-3">2025.1</h2>

            <table className="w-full text-left">

                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2">Disciplina</th>
                    <th className="p-2">A1</th>
                    <th className="p-2">A2</th>
                    <th className="p-2">A3</th>
                    <th className="p-2">Menção</th>
                </tr>
                </thead>

                <tbody>

                <tr className="border-t">
                    <td className="p-2">BI e Data Warehousing</td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2">SR</td>
                </tr>

                <tr className="border-t">
                    <td className="p-2">Construção de Frontend</td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2">SR</td>
                </tr>

                <tr className="border-t">
                    <td className="p-2">Manutenção de Software e Devops</td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2">SR</td>
                </tr>

                </tbody>

            </table>

            </section>

            {/* Tabela 2025.2 */}
            <section className="bg-white p-4 rounded shadow">

            <h2 className="font-semibold mb-3">2025.2</h2>

            <table className="w-full text-left">

                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2">Disciplina</th>
                    <th className="p-2">A1</th>
                    <th className="p-2">A2</th>
                    <th className="p-2">A3</th>
                    <th className="p-2">Menção</th>
                </tr>
                </thead>

                <tbody>

                <tr className="border-t">
                    <td className="p-2">Construção de Backend</td>
                    <td className="p-2">5.4</td>
                    <td className="p-2">6.2</td>
                    <td className="p-2"></td>
                    <td className="p-2">MM</td>
                </tr>

                <tr className="border-t">
                    <td className="p-2">Banco de Dados</td>
                    <td className="p-2">6.3</td>
                    <td className="p-2">6.1</td>
                    <td className="p-2"></td>
                    <td className="p-2">MM</td>
                </tr>

                <tr className="border-t">
                    <td className="p-2">Gerenciamento de projetos</td>
                    <td className="p-2">7.4</td>
                    <td className="p-2">7.1</td>
                    <td className="p-2"></td>
                    <td className="p-2">MM</td>
                </tr>

                </tbody>

            </table>

            </section>

        </main>

        </section>
    </>
  );
}

export default Notas;