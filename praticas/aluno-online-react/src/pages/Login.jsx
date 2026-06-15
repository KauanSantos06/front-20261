import {useNavigate} from "react-router";
import { useAuth } from "../contexts/useAuth";

function Login() {

   const {login} = useAuth();

  const navigate = useNavigate();

    const handleEntrar = () => {
    login({username: 'kauan@iesb.br' , password: '123456v'});
    navigate("/");
  }

    return <>
        <h1> Página de login </h1>
        <button onClick={handleEntrar}> Entrar </button>
    </>
}

export default Login;