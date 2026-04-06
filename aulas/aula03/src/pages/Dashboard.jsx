import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Main from "../components/Main";

function Dashboard(){
    return(
        <>
            <section className="flex h-screen bg-gray-100">

                <Sidebar />

                <main className="flex-1 p-6">
                        <Topbar titulo="Olá, Aluno!" />      
                        <Main />
                </main>

            </section>
        </>
    );
}

export default Dashboard;