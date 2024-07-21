import linkedInIcon from "../assets/icons/bxl-linkedin.png"
import githubIcon from "../assets/icons/bxl-github2.png"

function Contact() {
  return (
    <section id="contact" className="pt-[65px] pb-4 px-4">
      <h2 className="mb-6 text-2xl font-medium text-1000 dark:text-white">Estemos en contacto</h2>
      <div className="flex gap-4 mb-6">
        <a href="https://www.linkedin.com/in/enrique-hauenstein-8093662a4" target="_blank" className="flex justify-center items-center w-10 h-10 dark:bg-1000 border-2 border-600 dark:border-400 rounded-full"><img src={linkedInIcon} alt="linkedIn icon" className="w-[26px] h-[26px]" /></a>
        <a href="https://github.com/enrihg" target="_blank" className="flex justify-center items-center w-10 h-10 dark:bg-1000 border-2 border-600 dark:border-400 rounded-full"><img src={githubIcon} alt="github icon" className="w-[26px] h-[26px]" /></a>
      </div>
      <form action="">
        <label htmlFor="name" className="text-1000 dark:text-250 font-medium">Nombre</label>
        <input id="name" type="text" name="name" placeholder="Nombre" className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="email" className="text-1000 dark:text-250 font-medium">Correo electrónico</label>
        <input id="email" type="email" name="email" placeholder="Correo electrónico" className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="subject" className="text-1000 dark:text-250 font-medium">Asunto</label>
        <input id="subject" type="text" name="subject" placeholder="Asunto" className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <label htmlFor="message" className="text-1000 dark:text-250 font-medium">Escribe tu mensaje</label>
        <textarea id="message" name="message" placeholder="Escribe tu mensaje" rows={5} className="block w-full mt-2 mb-6 px-4 py-[10px] rounded-[4px] bg-200 dark:bg-950 placeholder:text-1000 dark:placeholder:text-white" />
        <button className="flex justify-center items-center w-[100px] h-[45px] bg-600 dark:bg-400 text-50 dark:text-1000 font-semibold text-[14px] rounded-[100px]">ENVIAR</button>
      </form>
      <div className="mt-8">2024 Diseñado por <a href="https://www.behance.net/evevilllar" target="_blank" className="text-600 font-medium">Eve Villar</a></div>
    </section>
  )
}

export default Contact