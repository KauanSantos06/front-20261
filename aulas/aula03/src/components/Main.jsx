import Topbar from "./Topbar";
import Card from "./Card";

function Main() {
  return (
    <main className="flex-1 p-6 md:p-10">
      <Topbar />

      <h2 className="text-lg md:text-xl font-semibold mb-6">
        Bem-vindo ao portal do aluno
      </h2>

      <section className="space-y-6">

        <Card titulo="Mural de Avisos">
          <p>Inscrição para o projeto de extensão</p>
          <p>Eleição para representante de turma</p>
        </Card>

        <Card titulo="Calendário Acadêmico">
          <p>23/02 - Início do período letivo 2026-1</p>
          <p>25/04 - Prazo final para aplicação da P1</p>
          <p>23/06 - Prazo final para aplicação da P2</p>
          <p>04/07 - Fim do período letivo 2026-1</p>
        </Card>

        <Card titulo="Minhas Disciplinas">
          <p>BI e Data Warehousing</p>
          <p>Construção de Frontend</p>
        </Card>

      </section>
    </main>
  );
}

export default Main;