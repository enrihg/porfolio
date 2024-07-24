import Linkedin from "../assets/icons/Linkedin";
import Github from "../assets/icons/Github";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global");

  return (
    <section id="contact" className="pt-[65px] pb-4 px-4">
      <h2 className="mb-6 text-2xl font-medium text-1000 dark:text-white">{t("contact.title")}</h2>
      <div className="flex gap-4 mb-6">
        <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10  border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Linkedin className={"fill-inherit"} width={20} height={20} /></a>
        <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Github className={"fill-inherit"} width={20} height={20} /></a>
      </div>
      <form action="">
        <label htmlFor="name" className="text-1000 dark:text-250 font-medium">{t("contact.name")}</label>
        <input id="name" type="text" name="name" placeholder={t("contact.name")} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="email" className="text-1000 dark:text-250 font-medium">{t("contact.email")}</label>
        <input id="email" type="email" name="email" placeholder={t("contact.email")} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="subject" className="text-1000 dark:text-250 font-medium">{t("contact.subject")}</label>
        <input id="subject" type="text" name="subject" placeholder={t("contact.subject")} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="message" className="text-1000 dark:text-250 font-medium">{t("contact.message")}</label>
        <textarea id="message" name="message" placeholder={t("contact.message")} rows={5} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <button className="flex justify-center items-center px-5 py-[10px] bg-600 hover:bg-700 active:bg-800 dark:bg-400 dark:hover:bg-500 dark:active:bg-600 text-50 dark:text-1000 font-semibold text-[14px] rounded-[100px]">{t("contact.submit")}</button>
      </form>
      <div className="mt-8">&copy; {t("contact.designedBy")}<a href="https://www.behance.net/evevilllar" target="_blank" className="text-500 hover:text-600 active:text-700 dark:text-400 dark:hover:text-500 dark:active:text-600 font-medium"> Eve Villar</a></div>
    </section>
  )
}

export default Contact