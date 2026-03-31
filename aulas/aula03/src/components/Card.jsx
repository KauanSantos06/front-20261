function Card(){
    return (
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
    );
}

export default Card;