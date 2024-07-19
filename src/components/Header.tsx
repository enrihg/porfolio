import profile from "../assets/images/profile-picture.png"
import linkedInIcon from "../assets/icons/bxl-linkedin.png"
import githubIcon from "../assets/icons/bxl-github2.png"
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
      <nav className={`fixed top-[56px] right-[-100%] transition ${isOpen ? "translate-x-[-100%]" : ""} h-screen w-full flex flex-col justify-center items-center gap-5 text-2xl dark:text-100 bg-950 opacity-95`}>
        <a href="#proyects">Proyectos</a>
        <a href="#skills">Tecnologías</a>
        <a href="#contact">Contacto</a>
        <a href="#">Ver CV</a>
        <button>Idioma</button>
        <button>Light/dark</button>
      </nav>
      <header className="border-b border-gray-700 pb-16 px-4 mb-16">
        <h1 className="dark:text-white text-[40px] pr-6">Hola, soy <span className="text-500">Enrique</span></h1>
        <p className="my-3 dark:text-300"> ^ Front-end developer</p>
        <p className="mb-8">// Me apasiona construir aplicaciones web desde cero, traduciendo ideas en experiencias fáciles de usar robustas y escalables.</p>
        <div className="flex items-center gap-4 mb-12">
          <a href="#contact" className="flex justify-center items-center w-[130px] h-[40px] bg-400 text-1000 font-semibold rounded-[100px]">CONTACTO</a>
          <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10 bg-1000 border-2 border-400 rounded-full"><img src={linkedInIcon} alt="linkedIn icon" className="w-[26px] h-[26px]"/></a>
          <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 bg-1000 border-2 border-400 rounded-full"><img src={githubIcon} alt="github icon" className="w-[26px] h-[26px]"/></a>
        </div>
        <img className="" src={profile} alt="profile picture" />
      </header>
    </>
  )
}

export default Header