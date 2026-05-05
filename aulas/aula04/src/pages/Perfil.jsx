import { useParams } from "react-router";

function Perfil() {
 const {id} = useParams();

 // busca usuarios pelo o ID

    return (
    <>
        <h1> Perfil do Usuario {id}</h1>
    </>
    );
}

export default Perfil;