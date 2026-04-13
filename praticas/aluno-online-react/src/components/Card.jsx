function Card({ titulo, conteudo }) {
  return (
    <article className="bg-gray-200 rounded-xl overflow-hidden">

      <header className="bg-gray-300 px-4 py-2 font-semibold">
        <h2>{titulo}</h2>
      </header>

      <ul className="p-4 space-y-2">
        {conteudo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </article>
  );
}

export default Card;