import Topbar from "./Topbar";
import Card from "./Card";

function Main() {
  return (
    <main className="flex-1 p-6 md:p-10">

      <h2 className="text-lg md:text-xl font-semibold mb-6">
        Bem-vindo ao portal do aluno
      </h2>

      <Card />
      
    </main>
  );
}

export default Main;