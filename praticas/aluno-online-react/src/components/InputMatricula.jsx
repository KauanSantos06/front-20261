function InputMatricula({erro, mudaValor}) {
  return (
    <div className="flex flex-col">
      <label htmlFor="matricula" className="mb-1 text-gray-700">
        E-mail
      </label>

      <input
        type="text"
        id="matricula"
        name="matricula"
        onChange={mudaValor}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
    </div>
  );
}

export default InputMatricula;