import Avatar from "../assets/user.svg"

function Topbar({ titulo, avatar, nome }) {
  return (
    <header className="flex justify-between items-center mb-6 md:mb-8">

      <section>
        <h1 className="text-2xl md:text-3xl font-bold">
          {titulo}
        </h1>

        {nome && (
          <p className="text-gray-500 text-sm">
            {nome}
          </p>
        )}
      </section>

      <figure>
        <img
          src={avatar}
          alt="Avatar do usuário"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        />
      </figure>

    </header>
  );
}

export default Topbar;