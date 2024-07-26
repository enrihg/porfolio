import galleria from "../assets/images/galleria.png"
import clock from "../assets/images/clock.png"
import todo from "../assets/images/todo.png"
import calculator from "../assets/images/calculator.png"
import githubUserSearch from "../assets/images/github-user-search.png"
import { useTranslation } from "react-i18next";
import Project from "./Project"

function Projects() {
  const [t] = useTranslation("global");

  return (
    <section id="projects" className="px-[5%] sm:px-[10%] xl:px-[15%] 2xl:px-[20%] border-b border-gray-700 pt-[70px] sm:pt-[78px] xl:pt-[130px]">
      <h2 className="mb-6 text-2xl xl:text-3xl font-medium text-1000 dark:text-white">{t("projects.projects")}</h2>
      <p className="max-w-[90%] sm:max-w-[500px] lg text-800 dark:text-250">{t("projects.about")}</p>
      <Project name="galleria" img={galleria} linkApp="https://galleria-slideshow-app.netlify.app/" linkGithub="https://github.com/enrihg/galleria-slideshow-site" technologies={["React", "React Router", "CSS"]} />
      <Project name="clock" img={clock} linkApp="https://enrihg.github.io/clock-app/" linkGithub="https://github.com/enrihg/clock-app" technologies={["HTML", "SASS", "JavaScript", "API"]} />
      <Project name="todo" img={todo} linkApp="https://ehg-todo-app.netlify.app/" linkGithub="https://github.com/enrihg/todo-app" technologies={["React", "TypeScript", "Tailwind"]} />
      <Project name="calculator" img={calculator} linkApp="https://enrihg.github.io/calculator-app/" linkGithub="https://github.com/enrihg/calculator-app" technologies={["HTML", "SASS", "JavaScript"]} />
      <Project name="githubUserSearch" img={githubUserSearch} linkApp="https://github-user-search-app2.netlify.app/" linkGithub="https://github.com/enrihg/github-user-search-app" technologies={["TypeScript", "Tailwind", "API"]} />
    </section>
  )
}

export default Projects