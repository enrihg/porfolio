import profile from "../assets/images/profile-picture.png"

function Header() {
  return (
    <header className="border-b border-gray-700 pb-16 mb-16">
      <nav>
        <span>Logo</span>
        <ul>
          <li className="">Inicio</li>
          <li className=""><a href="#proyects">Proyectos</a></li>
          <li className=""><a href="#skills">Habilidades</a></li>
          <li className=""><a href="#contact">Contacto</a></li>
          <li className=""><button>Idioma</button></li>
          <li className=""><button>Light/dark</button></li>
        </ul>
      </nav>
      <div className="px-8 text-center">
        <h1 className="dark:text-white text-[40px]">Hola, soy <span className="text-500">Enrique</span></h1>
        <p className="dark:text-300">Front-end developer</p>
        <p>// Me apasiona construir aplicaciones web desde cero, traduciendo ideas en experiencias fáciles de usar robustas y escalables.</p>
        <img className="" src={profile} alt="profile picture" />
        <button>Ver CV</button>
      </div>
    </header>
  )
}

export default Header