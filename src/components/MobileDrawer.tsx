import { useTranslation } from "react-i18next";

type ComponentProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isAnimated: boolean,
  setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>,
}

function MobileDrawer({ isOpen, setIsOpen, isAnimated, setIsAnimated }: ComponentProps) {
  const [t] = useTranslation("global");

  return (
    <nav className={`fixed top-[56px] right-[-100%] transition ${isOpen ? "translate-x-[-100%]" : ""} h-screen w-full  text-2xl bg-50 dark:bg-950 opacity-95`}>
      <div onClick={() => { setIsOpen(!isOpen); setIsAnimated(!isAnimated) }} className="h-screen flex flex-col justify-center items-center gap-5">
        <a href="#header" className="text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500">{t("navbar.home")}</a>
        <a href="#projects" className="text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500">{t("navbar.projects")}</a>
        <a href="#technologies" className="text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500">{t("navbar.technologies")}</a>
        <a href="#contact" className="text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500">{t("navbar.contact")}</a>
      </div>
    </nav>
  )
}

export default MobileDrawer