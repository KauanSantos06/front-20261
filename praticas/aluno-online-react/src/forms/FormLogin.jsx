import { useState } from "react";
import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();
  const [matriculaErro, setMatriculaErro] = useState();
  const [senhaErro, setSenhaErro] = useState();

  const trataSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      setMatriculaErro("Matrícula é obrigatorio");
    }

    if (!senha) {
      setSenhaErro("Senha é obrigatório");
    }
  };

  const mudaMatricula = (e) => {
    setMatricula(e.target.value);
    setMatriculaErro("");
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <div className="text-center mb-6">
          <div className="text-5xl"></div>
          <h1 className="text-2xl font-semibold mt-2">Aluno Online</h1>
        </div>

        <form onSubmit={trataSubmit} className="space-y-4">
          <InputMatricula erro={matriculaErro} mudaValor={mudaMatricula} />
          <InputSenha erro={senhaErro} mudaValor={mudaSenha} />
          <BotaoSubmit>Entrar</BotaoSubmit>
        </form>

      </div>
    </div>
  );
}

export default FormLogin;