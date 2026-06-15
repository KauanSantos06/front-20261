import { useEffect , useState } from "react";

function Home() {
    const [carregando, setCarregando] = useState(true);
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setTarefas([
                {id: 1, nome: "Implementar trabalho", situacao: "Aberta"},
                {id: 2, nome: "Entregar práticas", situacao: "Pendente"},
                {id: 3, nome: "Revisar conteudo", situacao: "Pendente"},
                {id: 4, nome: "Assistir Video-Aulas", situacao: "Concluída"},
            ]);
            setCarregando(false);
        }, 3000);
        return () => clearTimeout(timeout); 
        }, []);

    return (
        <>
        <h1> Home </h1>
        {carregando ? (
            <p> Aguarde... </p>
        ) : (

        <table>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Tarefa </th>
                    <th> Situação </th>
                </tr>
                <tbody>
                    {tarefas.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.situacao}</td>
                        </tr>
                    ))}
                </tbody>
            </thead>
        </table>
        )}
        </>
    );
}
export default Home;