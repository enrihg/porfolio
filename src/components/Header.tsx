import profile from "../assets/images/profile-picture.png"
import Sun from "../assets/icons/Sun"
import Moon from "../assets/icons/Moon"
import spain from "../assets/icons/spain.png"
import usa from "../assets/icons/united-states.png"
import Linkedin from "../assets/icons/Linkedin"
import Github from "../assets/icons/Github"
import { useState } from "react"
import { useTranslation } from "react-i18next";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("theme")!);
  if (!data) return false;
  return data;
}

function Header() {
  const [t, i18n] = useTranslation("global");
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

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  const currentLanguage = i18n.language;
  console.log(currentLanguage)

  return (
    <>
      <nav className="fixed top-0 z-10 w-screen flex justify-between items-center p-4 text-1000 bg-50 dark:bg-1000">
        <a href="#" className="text-1000 hover:text-700 active:text-800 dark:text-white dark:hover:text-500 dark:active:text-600">Enrique Hauenstein</a>
        <ul className="hidden">
          <li><a href="#projects">{t("navbar.projects")}</a></li>
          <li><a href="#skills">{t("navbar.technologies")}</a></li>
          <li><a href="#contact">{t("navbar.contact")}</a></li>
        </ul>
        <div className="flex items-center">
          <button className="mr-3" onClick={toggleTheme}>{darkTheme ? <Sun className="stroke-white hover:stroke-500" /> : <Moon className="fill-1000 hover:fill-700" />}</button>
          {currentLanguage === "en" ? <button onClick={() => handleChangeLanguage("es")} className="flex items-center mr-3 w-7 h-7 hover:brightness-90 dark:hover:brightness-110"><img src={spain} alt="spanish" /></button> :
            <button onClick={() => handleChangeLanguage("en")} className="flex items-center mr-3 w-7 h-7 hover:brightness-90 dark:hover:brightness-110"><img src={usa} alt="english" /></button>}
          <button onClick={() => { setIsOpen(!isOpen); setIsAnimated(!isAnimated) }} className="text-xl *:hover:bg-700 dark:*:hover:bg-500">
            <div style={{ animationFillMode: 'forwards', }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar1' : ''}`}></div>
            <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar2' : ''}`}></div>
            <div style={{ animationFillMode: 'forwards' }} className={`w-7 h-[3px] my-[4px] bg-1000 dark:bg-50 rounded-lg ${isAnimated ? 'animate-bar3' : ''}`}></div>
          </button>
        </div>
      </nav>
      <nav className={`fixed top-[56px] right-[-100%] transition ${isOpen ? "translate-x-[-100%]" : ""} h-screen w-full  text-2xl text-1000 dark:text-100 bg-50 dark:bg-950 opacity-95`}>
        <div onClick={() => { setIsOpen(!isOpen); setIsAnimated(!isAnimated) }} className="h-screen flex flex-col justify-center items-center gap-5">
          <a href="#header">{t("navbar.home")}</a>
          <a href="#projects">{t("navbar.projects")}</a>
          <a href="#skills">{t("navbar.technologies")}</a>
          <a href="#contact">{t("navbar.contact")}</a>
        </div>
      </nav>
      <header id="header" className="border-b border-gray-700 pb-16 px-4">
        <h1 className="text-800 dark:text-white text-[40px] leading-[50px] pt-[65px] pr-6">{t("header.greeting")}<span className="text-600"> Enrique</span></h1>
        <p className="my-3 text-800 dark:text-200 font-firaCode font-medium"> &gt; {t("header.role")}</p>
        <p className="mb-8 text-1000 dark:text-100">// {t("header.aboutMe")}</p>
        <div className="flex items-center gap-4 mb-12">
          <a href="#contact" className="flex justify-center items-center px-5 py-[10px] bg-600 hover:bg-700 active:bg-800 dark:bg-400 hover:dark:bg-500 active:dark:bg-600 text-50 dark:text-1000 font-semibold text-[14px] rounded-[100px]">{t("header.contact")}</a>
          <a href="https://docs.google.com/document/d/1co1IJUgXaglv7IQ8Z0vVljNMQHtyJUHzA0hkECFy-_M/edit?usp=sharing" target="_blank" className="flex justify-center items-center w-10 h-10 border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 text-600 hover:text-700 active:text-800 dark:text-400 dark:hover:text-500 dark:active:text-600 font-semibold text-[18px] rounded-full">CV</a>
          <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10  border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Linkedin className={"fill-inherit"} width={20} height={20} /></a>
          <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Github className={"fill-inherit"} width={20} height={20} /></a>
        </div>
        <img className="dark:border-[1px] dark:border-500 p-1 rounded-full" src={profile} alt="profile picture" />
      </header>
    </>
  )
}

export default Header