import profile from "../assets/images/profile-picture.png"
import Linkedin from "../assets/icons/Linkedin"
import Github from "../assets/icons/Github"
import { useTranslation } from "react-i18next";

function Header() {
  const [t] = useTranslation("global");

  return (
    <header id="header" className="sm:flex sm:justify-between sm:gap-4 pb-16 px-4 border-b border-gray-700">
      <div>
        <h1 className="text-800 dark:text-white text-[40px] leading-[50px] pt-[65px]">{t("header.greeting")}<br /><span className="text-600"> Enrique</span></h1>
        <p className="my-3 text-800 dark:text-200 font-firaCode font-medium"> &gt; {t("header.role")}</p>
        <p className="mb-8 text-1000 dark:text-100">// {t("header.aboutMe")}</p>
        <div className="flex items-center gap-4 mb-12">
          <a href="#contact" className="flex justify-center items-center px-5 py-[10px] bg-600 hover:bg-700 active:bg-800 dark:bg-400 hover:dark:bg-500 active:dark:bg-600 text-50 dark:text-1000 font-semibold text-[14px] rounded-[100px]">{t("header.contact")}</a>
          <a href="https://docs.google.com/document/d/1co1IJUgXaglv7IQ8Z0vVljNMQHtyJUHzA0hkECFy-_M/edit?usp=sharing" target="_blank" className="flex justify-center items-center w-10 h-10 border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 text-600 hover:text-700 active:text-800 dark:text-400 dark:hover:text-500 dark:active:text-600 font-semibold text-[18px] rounded-full">CV</a>
          <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10  border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Linkedin className={"fill-inherit"} width={20} height={20} /></a>
          <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Github className={"fill-inherit"} width={20} height={20} /></a>
        </div>
      </div>
      <img className="sm:mt-[65px] sm:w-[260px] sm:h-[260px] dark:border-[1px] dark:border-500 p-1 rounded-full" src={profile} alt="profile picture" />
    </header>
  )
}

export default Header