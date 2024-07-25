import { useState } from "react"
import { useTranslation } from "react-i18next";
import Sun from "../assets/icons/Sun"
import Moon from "../assets/icons/Moon"
import spain from "../assets/icons/spain.png"
import usa from "../assets/icons/united-states.png"

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("theme")!);
  if (!data) return false;
  return data;
}

type ComponentProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isAnimated: boolean,
  setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>,
}

function Navbar({ isOpen, setIsOpen, isAnimated, setIsAnimated }: ComponentProps) {
  const [t, i18n] = useTranslation("global");

  const [darkTheme, setDarkTheme] = useState(getInitialData)
  if (darkTheme) {
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = () => {
    localStorage.setItem("theme", JSON.stringify(!darkTheme))
    document.documentElement.classList.toggle('dark');
    setDarkTheme(!darkTheme);
  }

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  const currentLanguage = i18n.language;

  return (
    <nav className="fixed top-0 z-10 w-screen flex justify-between items-center p-4 text-1000 bg-50 dark:bg-1000">
      <a href="#" className="text-1000 hover:text-700 active:text-800 dark:text-white dark:hover:text-500 dark:active:text-600">Enrique Hauenstein</a>
      <ul className="hidden sm:flex gap-8 ">
        <li className="text-1000 hover:text-700 active:text-800 dark:text-white dark:hover:text-500 dark:active:text-600"><a href="#projects">{t("navbar.projects")}</a></li>
        <li className="text-1000 hover:text-700 active:text-800 dark:text-white dark:hover:text-500 dark:active:text-600"><a href="#technologies">{t("navbar.technologies")}</a></li>
        <li className="text-1000 hover:text-700 active:text-800 dark:text-white dark:hover:text-500 dark:active:text-600"><a href="#contact">{t("navbar.contact")}</a></li>
      </ul>
      <div className="flex items-center">
        <button className="mr-3" onClick={toggleTheme}>{darkTheme ? <Sun className="stroke-white hover:stroke-500" /> : <Moon className="fill-1000 hover:fill-700" />}</button>
        {currentLanguage === "en" ? <button onClick={() => handleChangeLanguage("es")} className="flex items-center mr-3 w-7 h-7 hover:brightness-90 dark:hover:brightness-110"><img src={spain} alt="spanish" /></button> :
          <button onClick={() => handleChangeLanguage("en")} className="flex items-center mr-3 w-7 h-7 hover:brightness-90 dark:hover:brightness-110"><img src={usa} alt="english" /></button>}
        <button onClick={() => { setIsOpen(!isOpen); setIsAnimated(!isAnimated) }} className="text-xl *:hover:bg-700 dark:*:hover:bg-500 sm:hidden">
          <div style={{ animationFillMode: 'forwards', }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar1' : ''}`}></div>
          <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar2' : ''}`}></div>
          <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar3' : ''}`}></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar