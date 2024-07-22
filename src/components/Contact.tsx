import linkedInIcon from "../assets/icons/bxl-linkedin.png"
import githubIcon from "../assets/icons/bxl-github2.png"
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global");

  return (
    <section id="contact" className="pt-[65px] pb-4 px-4">
      <h2 className="mb-6 text-2xl font-medium text-1000 dark:text-white">{t("contact.title")}</h2>
      <div className="flex gap-4 mb-6">
        <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10 dark:bg-1000 border-2 border-600 dark:border-400 rounded-full"><img src={linkedInIcon} alt="linkedIn icon" className="w-[26px] h-[26px]" /></a>
        <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 dark:bg-1000 border-2 border-600 dark:border-400 rounded-full"><img src={githubIcon} alt="github icon" className="w-[26px] h-[26px]" /></a>
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
        <button className="flex justify-center items-center w-[100px] h-[45px] bg-600 dark:bg-400 text-50 dark:text-1000 font-semibold text-[14px] rounded-[100px]">{t("contact.submit")}</button>
      </form>
      <div className="mt-8">&copy; {t("contact.designedBy")}<a href="https://www.behance.net/evevilllar" target="_blank" className="text-600 font-medium"> Eve Villar</a></div>
    </section>
  )
}

export default Contact