import profile from "../assets/images/profile-picture.png"
import sunIcon from "../assets/icons/sun.png"
import moonIcon from "../assets/icons/moon.png"
import linkedInIcon from "../assets/icons/bxl-linkedin.png"
import githubIcon from "../assets/icons/bxl-github2.png"
import { useState } from "react"

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("theme")!);
  if (!data) return false;
  return data;
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getInitialData)
  if (darkTheme) {
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = () => {
    localStorage.setItem("theme", JSON.stringify(!darkTheme))
    document.documentElement.classList.toggle('dark');
    setDarkTheme(!darkTheme);
  }

  return (
    <>
      <nav className="fixed top-0 w-screen flex justify-between items-center p-4 text-1000 bg-50 dark:bg-1000">
        <a href="#" className="dark:text-white an">Enrique Hauenstein</a>
        <ul className="hidden">
          <li><a href="#proyects">Proyectos</a></li>
          <li><a href="#skills">Tecnologías</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="hidden">
          <button>Idioma</button>
          <button>Light/dark</button>
        </div>
        <div className="flex items-center">
          <button className="mr-3" onClick={toggleTheme}><img src={darkTheme ? sunIcon : moonIcon} alt="dark/light mode" /></button>
          <button onClick={() => { setIsOpen(!isOpen); setIsAnimated(!isAnimated) }} className="text-xl">
            <div style={{ animationFillMode: 'forwards', }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar1' : ''}`}></div>
            <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar2' : ''}`}></div>
            <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar3' : ''}`}></div>
          </button>
        </div>
      </nav>
      <nav className={`fixed top-[56px] right-[-100%] transition ${isOpen ? "translate-x-[-100%]" : ""} h-screen w-full  text-2xl text-1000 dark:text-100 bg-50 dark:bg-950 opacity-95`}>
        <div onClick={() => { setIsOpen(!isOpen); setIsAnimated(!isAnimated) }} className="h-screen flex flex-col justify-center items-center gap-5">
          <a href="#header">Inicio</a>
          <a href="#proyects">Proyectos</a>
          <a href="#skills">Tecnologías</a>
          <a href="#contact">Contacto</a>
          <button>Idioma</button>
        </div>
      </nav>
      <header id="header" className="border-b border-gray-700 pb-16 px-4">
        <h1 className="text-800 dark:text-white text-[40px] leading-[50px] pt-[65px] pr-6">Hola, soy <span className="text-600">Enrique</span></h1>
        <p className="my-3 text-800 dark:text-200"> ^ Front-end developer</p>
        <p className="mb-8 text-1000 dark:text-100">// Me apasiona construir aplicaciones web desde cero, traduciendo ideas en experiencias fáciles de usar robustas y escalables.</p>
        <div className="flex items-center gap-4 mb-12">
          <a href="#contact" className="flex justify-center items-center w-[110px] h-[46px] bg-600 dark:bg-400 text-50 dark:text-1000 font-semibold text-[14px] rounded-[100px]">CONTACTO</a>
          <a href="https://docs.google.com/document/d/1co1IJUgXaglv7IQ8Z0vVljNMQHtyJUHzA0hkECFy-_M/edit?usp=sharing" target="_blank" className="flex justify-center items-center w-10 h-10 border-2 border-600 dark:border-400 text-600 dark:text-400 font-semibold text-[18px] rounded-full">CV</a>
          <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10 dark:bg-1000 border-2 border-600 dark:border-400 rounded-full"><img src={linkedInIcon} alt="linkedIn icon" className="w-[26px] h-[26px]" /></a>
          <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 dark:bg-1000 border-2 border-600 dark:border-400 rounded-full"><img src={githubIcon} alt="github icon" className="w-[26px] h-[26px]" /></a>
        </div>
        <img className="dark:border-[1px] dark:border-500 p-1 rounded-full" src={profile} alt="profile picture" />
      </header>
    </>
  )
}

export default Header