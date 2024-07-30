import Linkedin from "../assets/icons/Linkedin";
import Github from "../assets/icons/Github";
import success from "../assets/icons/success.png"
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [t] = useTranslation("global");

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ee5ab3b9-e4d6-462a-955a-4fade46262e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      event.target?.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <section id="contact" className="md:grid md:grid-cols-[40%_60%] lg:grid-cols-2 md:grid-rows-1 md:items-start md:gap-4 pt-[70px] sm:pt-[78px] pb-4 sm:pb-8 xl:pb-32 px-[5%] sm:px-[10%] xl:px-[15%] 2xl:px-[20%]">
      <h2 className="md:row-start-1 md:col-start-1 md:max-w-[70%] mb-6 text-2xl xl:text-3xl font-medium text-1000 dark:text-white">{t("contact.title")}</h2>
      <div className="md:row-start-1 md:col-start-1 md:mt-24 flex gap-4 mb-6">
        <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10  border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Linkedin className={"fill-inherit"} width={20} height={20} /></a>
        <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 border-2 border-600 hover:border-700 active:border-800 dark:border-400 dark:hover:border-500 dark:active:border-600 rounded-full fill-600 hover:fill-700 active:fill-800 dark:fill-400 dark:hover:fill-500 dark:active:fill-600 "><Github className={"fill-inherit"} width={20} height={20} /></a>
      </div>
      <form action="" onSubmit={onSubmit} className="md:row-start-1 md:col-start-2">
        <label htmlFor="name" className="text-1000 dark:text-250 font-medium">{t("contact.name")}</label>
        <input required id="name" type="text" name="name" placeholder={t("contact.name")} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="email" className="text-1000 dark:text-250 font-medium">{t("contact.email")}</label>
        <input required id="email" type="email" name="email" placeholder={t("contact.email")} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="message" className="text-1000 dark:text-250 font-medium">{t("contact.message")}</label>
        <textarea required id="message" name="message" placeholder={t("contact.message")} rows={5} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <button className="flex justify-center items-center px-5 py-[10px] bg-600 hover:bg-700 active:bg-800 dark:bg-400 dark:hover:bg-500 dark:active:bg-600 text-50 dark:text-1000 font-semibold text-[14px] rounded-[100px]">{t("contact.submit")}</button>
      </form>
      <div className="md:w-[90%] md:row-start-1 md:col-start-1 md:self-end mt-8">&copy; {t("contact.designedBy")}<a href="https://www.behance.net/evevilllar" target="_blank" className="text-500 hover:text-600 active:text-700 dark:text-400 dark:hover:text-500 dark:active:text-600 font-medium"> Eve Villar</a></div>
      <article onClick={() => setSubmitted(false)} className={`${!submitted ? "hidden" : ""} fixed flex justify-center items-center top-0 left-0 z-20 w-screen h-screen bg-1000 bg-opacity-70 dark:bg-1000 text-600 dark:bg-opacity-95`}>
        <div className="flex flex-col justify-between items-center w-[300px] h-[260px] dark:bg-950 bg-100 text-black dark:text-white rounded-xl p-4">
          <img src={success} alt="success" className="w-8 h-8" />
          <div className="font-semibold text-xl mb-4">{t("contact.messageSent.title")}</div>
          <div className="text-lg text-center">{t("contact.messageSent.description")}</div>
          <button onClick={() => setSubmitted(false)} className="w-[40px] h-[40px] rounded-full bg-600 hover:bg-700 dark:bg-400 dark:hover:bg-500 text-white dark:text-black font-medium">OK</button>
        </div>
      </article>
    </section>
  )
}

export default Contact