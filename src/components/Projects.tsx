import galleria from "../assets/images/galleria.png"
import clock from "../assets/images/clock.png"
import todo from "../assets/images/todo.png"
import calculator from "../assets/images/calculator.png"
import githubUserSearch from "../assets/images/github-user-search.png"
import Github from "../assets/icons/Github"
import Arrow from "../assets/icons/Arrow"
import { useTranslation } from "react-i18next";

function Projects() {
  const [t] = useTranslation("global");

  return (
    <section id="proyects" className="px-4 border-b border-gray-700 pt-[65px] pb-16">
      <h2 className="mb-6 text-2xl font-medium text-1000 dark:text-white">{t("projects.projects")}</h2>
      <p className="text-800 dark:text-250">{t("projects.about")}</p>
      <article className="my-10">
        <a href="https://galleria-slideshow-app.netlify.app/" target="_blank" className="block px-4 py-6 bg-100 dark:bg-950 rounded-lg hover:scale-105 transition"><img src={galleria} alt="galleria preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">{t("projects.galleria.title")}</h3>
        <p className="text-800 dark:text-250 mb-4">{t("projects.galleria.description")}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">React</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">React Router</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">CSS</li>
        </ul>
        <a href="https://galleria-slideshow-app.netlify.app/" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 mr-6 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.liveDemo")}<Arrow className={"inline fill-inherit"} width={24} height={25} /></a>
        <a href="https://github.com/enrihg/galleria-slideshow-site" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.seeOnGithub")}<Github className={"inline pb-1 fill-inherit"} width={24} height={24} /></a>
      </article>
      <article className="my-10">
        <a href="https://enrihg.github.io/clock-app/" target="_blank" className="block px-4 py-6 bg-100 dark:bg-950 rounded-lg hover:scale-105 transition"><img src={clock} alt="clock preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">{t("projects.clock.title")}</h3>
        <p className="text-800 dark:text-250 mb-4">{t("projects.clock.description")}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">HTML</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">SASS</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">JavaScript</li>
        </ul>
        <a href="https://enrihg.github.io/clock-app/" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 mr-6 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.liveDemo")}<Arrow className={"inline fill-inherit"} width={24} height={25} /></a>
        <a href="https://github.com/enrihg/clock-app" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.seeOnGithub")}<Github className={"inline pb-1 fill-inherit"} width={24} height={24} /></a>
      </article>
      <article className="my-10">
        <a href="https://ehg-todo-app.netlify.app/" target="_blank" className="block px-4 py-6 bg-100 dark:bg-950 rounded-lg hover:scale-105 transition"><img src={todo} alt="todo preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">{t("projects.todo.title")}</h3>
        <p className="text-800 dark:text-250 mb-4">{t("projects.todo.description")}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">React</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">TypeScript</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">Tailwind</li>
        </ul>
        <a href="https://ehg-todo-app.netlify.app/" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 mr-6 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.liveDemo")}<Arrow className={"inline fill-inherit"} width={24} height={25} /></a>
        <a href="https://github.com/enrihg/todo-app" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.seeOnGithub")}<Github className={"inline pb-1 fill-inherit"} width={24} height={24} /></a>
      </article>
      <article className="my-10">
        <a href="https://enrihg.github.io/calculator-app/" target="_blank" className="block px-4 py-6 bg-100 dark:bg-950 rounded-lg hover:scale-105 transition"><img src={calculator} alt="calculator preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">{t("projects.calculator.title")}</h3>
        <p className="text-800 dark:text-250 mb-4">{t("projects.calculator.description")}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">HTML</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">SASS</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">JavaScript</li>
        </ul>
        <a href="https://enrihg.github.io/calculator-app/" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 mr-6 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.liveDemo")}<Arrow className={"inline fill-inherit"} width={24} height={25} /></a>
        <a href="https://github.com/enrihg/calculator-app" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.seeOnGithub")}<Github className={"inline pb-1 fill-inherit"} width={24} height={24} /></a>
      </article>
      <article className="my-10">
        <a href="https://github-user-search-app2.netlify.app/" target="_blank" className="block px-4 py-6 bg-100 dark:bg-950 rounded-lg hover:scale-105 transition"><img src={githubUserSearch} alt="github user search preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">{t("projects.githubUserSearch.title")}</h3>
        <p className="text-800 dark:text-250 mb-4">{t("projects.githubUserSearch.description")}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">TypeScript</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">Tailwind</li>
        </ul>
        <a href="https://github-user-search-app2.netlify.app/" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 mr-6 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.liveDemo")}<Arrow className={"inline fill-inherit"} width={24} height={25} /></a>
        <a href="https://github.com/enrihg/github-user-search-app" target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.seeOnGithub")}<Github className={"inline pb-1 fill-inherit"} width={24} height={24} /></a>
      </article>
    </section>
  )
}

export default Projects