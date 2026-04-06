import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos() {
  return (
    <>
        <section className="flex h-screen bg-gray-100">

        <Sidebar />

        <main className="flex-1 p-6">

            <Topbar titulo="Meus Requerimentos" />

            <section className="p-8 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
                Faça solicitações online para a secretaria
            </h2>

            <table className="w-full">

                <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="p-2">Tipo</th>
                    <th className="p-2">Data</th>
                    <th className="p-2">Situação</th>
                </tr>
                </thead>

                <tbody>
                <tr className="border-t">
                    <td className="p-2">Revisão de Menção</td>
                    <td className="p-2">15/12/2025</td>
                    <td className="p-2 text-red-500">Indeferido</td>
                </tr>
                </tbody>

                <tbody>
                <tr className="border-t">
                    <td className="p-2">Dispensa da Diciplina</td>
                    <td className="p-2">12/06/2025</td>
                    <td className="p-2 text-red-500">Indeferido</td>
                </tr>
                </tbody>

                <tbody>
                <tr className="border-t">
                    <td className="p-2">Trancamento da Matrícula</td>
                    <td className="p-2">05/01/2024</td>
                    <td className="p-2 text-green-500">Deferido</td>
                </tr>
                </tbody>

                <tbody>
                <tr className="border-t">
                    <td className="p-2">Mudança de turno</td>
                    <td className="p-2">10/10/2023</td>
                    <td className="p-2 text-green-500">Deferido</td>
                </tr>
                </tbody>

                <tbody>
                <tr className="border-t">
                    <td className="p-2">Renovação de Matrícula</td>
                    <td className="p-2">20/02/2023</td>
                    <td className="p-2 text-green-500">Deferido</td>
                </tr>
                </tbody>

            </table>

            </section>

        </main>

        </section>
    </>
  );
}

export default Requerimentos;