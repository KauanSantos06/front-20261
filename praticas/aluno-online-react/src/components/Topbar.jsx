import Avatar from "../assets/user.svg"

function Topbar({titulo}) {
  return (

    <header className="flex justify-between items-center mb-6 md:mb-8">

      <h1 className="text-2xl md:text-3xl font-bold">
        {titulo}
      </h1>

      <img
        src="/src/assets/user.svg"
        alt="Avatar"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full"
      />
    </header>
  );
}

export default Topbar;