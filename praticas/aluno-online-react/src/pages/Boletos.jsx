import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <>
      <section className="flex h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-6">
          <Topbar titulo="Meus Boletos" />

          <section className="p-8 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
              Histórico de Pagamentos
            </h2>

            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Vencimento</th>
                  <th className="p-2">Valor R$</th>
                  <th className="p-2">Situação</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/01/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-green-500">Pago</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/02/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-red-500">Em atraso</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/03/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/04/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/05/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/06/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/07/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/08/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/09/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/10/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/11/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/12/2026</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/01/2027</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">19/02/2027</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-t font-bold">
                  <td className="p-2">Total</td>
                  <td className="p-2">500,00</td>
                  <td className="p-2 text-yellow-600">A Pagar</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </section>
    </>
  );
}

export default Boletos;