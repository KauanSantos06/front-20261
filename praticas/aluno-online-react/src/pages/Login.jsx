import {useNavigate} from "react-router";

function Login() {

  const navigate = useNavigate();

    return <>
        <h1> Página de login </h1>
        <button onClick={()=> navigate("/")}> Entrar </button>
    </>
}

export default Login;