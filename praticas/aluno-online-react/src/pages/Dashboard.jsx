import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Main from "../components/Main";

function Dashboard(){
    return(
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
                  titulo="Olá, Aluno!"
                  avatar="/src/assets/user.svg"
                />

                <Main 
                  titulo="Bem-vindo ao portal do aluno"
                  cards={[
                    {
                      titulo: "Mural de Avisos",
                      conteudo: [
                        "Inscrição para o projeto de extensão",
                        "Eleição para representante de turma"
                      ]
                    },
                    {
                      titulo: "Calendário Acadêmico",
                      conteudo: [
                        "23/02 - Início do período letivo",
                        "25/04 - Prazo final para a aplicação da P1",
                        "23/06 - Prazo final para a aplicação da P2",
                        "04/07 - Fim do périodo letivo"
                      ]
                    },
                                         {
                      titulo: "Minhas disciplinas",
                      conteudo: [
                        "Construção de Front-end",
                        "Manutenção de Software e Dev ops",
                        "Business Intelligence e Data Warehousing",
                        "Disciplina Blackboard"
                      ]
                    }
                  ]}
                />

            </main>

        </section>
    );
}
export default Dashboard;