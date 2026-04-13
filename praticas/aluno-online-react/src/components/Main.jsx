import Card from "./Card";

function Main({ titulo, cards }) {
  return (
    <main className="flex-1 p-6 md:p-10">

      <h2 className="text-lg md:text-xl font-semibold mb-6">
        {titulo}
      </h2>

      <section className="space-y-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            titulo={card.titulo}
            conteudo={card.conteudo}
          />
        ))}
      </section>

    </main>
  );
}

export default Main;