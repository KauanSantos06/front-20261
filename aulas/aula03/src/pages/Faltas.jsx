import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

function Faltas(){
    return(
        <>
            <section className="flex h-screen">
                <Sidebar />
                <Topbar />
            </section>
        </>
    );
}

export default Faltas;