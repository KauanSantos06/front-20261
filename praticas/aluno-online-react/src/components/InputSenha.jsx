function InputSenha({erro, mudaValor}) {
  return (
    <div className="flex flex-col">
      <label htmlFor="senha" className="mb-1 text-gray-700">
        Senha
      </label>

      <input
        type="password"
        id="senha"
        name="senha"
        onChange={mudaValor}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
    </div>
  );
}

export default InputSenha;