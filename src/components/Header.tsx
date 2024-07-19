import profile from "../assets/images/profile-picture.png"
import { useState } from "react"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center p-4 bg-1000">
        <a href="#" className="dark:text-white an">ENRIQUE HAUENSTEIN</a>
        <ul className="hidden">
          <li><a href="#proyects">Proyectos</a></li>
          <li><a href="#skills">Tecnologías</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="hidden">
          <button>Idioma</button>
          <button>Light/dark</button>
        </div>
        <button onClick={() => { setIsOpen(!isOpen); setIsAnimated(!isAnimated) }} className="text-xl">
          <div style={{ animationFillMode: 'forwards', }} className={`w-7 h-[3px] my-[4px] dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar1' : ''}`}></div>
          <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar2' : ''}`}></div>
          <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar3' : ''}`}></div>
        </button>
      </nav>
      <nav className={`fixed top-[60px] right-[-100%] transition ${isOpen ? "translate-x-[-100%]" : ""} h-screen w-full flex flex-col justify-center items-center gap-5 text-2xl dark:text-100 bg-950 opacity-95`}>
        <a href="#proyects">Proyectos</a>
        <a href="#skills">Tecnologías</a>
        <a href="#contact">Contacto</a>
        <button>Idioma</button>
        <button>Light/dark</button>
      </nav>
      <header className="border-b border-gray-700 pb-16 px-4 mb-16">
        <div className="">
          <h1 className="dark:text-white text-[40px] pr-6">Hola, soy <span className="text-500">Enrique</span></h1>
          <p className="my-3 dark:text-300"> ^ Front-end developer</p>
          <p className="mb-8">// Me apasiona construir aplicaciones web desde cero, traduciendo ideas en experiencias fáciles de usar robustas y escalables.</p>
          <img className="" src={profile} alt="profile picture" />
          <button>Ver CV</button>
        </div>
      </header>
    </>
  )
}

export default Header