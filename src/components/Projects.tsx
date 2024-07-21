import galleria from "../assets/images/galleria.png"
import clock from "../assets/images/clock.png"
import todo from "../assets/images/todo.png"
import calculator from "../assets/images/calculator.png"
import githubUserSearch from "../assets/images/github-user-search.png"
import arrowIcon from "../assets/icons/arrow.png"
import githubIcon from "../assets/icons/bxl-github.png"

function Projects() {
  return (
    <section id="proyects" className="px-4 border-b border-gray-700 pt-[65px] pb-16">
      <h2 className="mb-6 text-2xl font-medium">Proyectos</h2>
      <p className="text-800 dark:text-250">Estos son algunos de los proyectos seleccionados que muestran mi pasión por el desarrollo front-end.</p>
      <article className="my-10">
        <a href="https://galleria-slideshow-app.netlify.app/" target="_blank" className="block px-4 py-8 bg-200 dark:bg-950 rounded-lg"><img src={galleria} alt="galleria preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">Galleria</h3>
        <p className="text-800 dark:text-250 mb-4">El proyecto consta de una galería de obras de arte de distintos artistas.</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">React</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">React Router</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">CSS</li>
        </ul>
        <a href="https://galleria-slideshow-app.netlify.app/" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1 mr-6">LIVE DEMO <img src={arrowIcon} alt="arrow" className="inline pb-1" /></a>
        <a href="https://github.com/enrihg/galleria-slideshow-site" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1">SEE ON GITHUB <img src={githubIcon} alt="Github" className="inline pb-1" /></a>
      </article>
      <article className="my-10">
        <a href="https://enrihg.github.io/clock-app/" target="_blank" className="block px-4 py-8 bg-200 dark:bg-950 rounded-lg"><img src={clock} alt="clock preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">Clock</h3>
        <p className="text-800 dark:text-250 mb-4">En este proyecto armé una aplicación web que interactúa con varias APIs para obtener datos tales como la hora, fecha, ciudad, zona horaria, etc según la ubicación (IP) del usuario y otra API que genera frases de forma aleatoria. La imagen del fondo varía según si es de noche o de día, al igual que el saludo y el ícono.</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">HTML</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">SASS</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">JavaScript</li>
        </ul>
        <a href="https://enrihg.github.io/clock-app/" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1 mr-6">LIVE DEMO <img src={arrowIcon} alt="arrow" className="inline pb-1" /></a>
        <a href="https://github.com/enrihg/clock-app" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1">SEE ON GITHUB <img src={githubIcon} alt="Github" className="inline pb-1" /></a>
      </article>
      <article className="my-10">
        <a href="https://ehg-todo-app.netlify.app/" target="_blank" className="block px-4 py-8 bg-200 dark:bg-950 rounded-lg"><img src={todo} alt="todo preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">Todo list</h3>
        <p className="text-800 dark:text-250 mb-4">El proyecto consta de una aplicación para crear listas de tareas pendientes.</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">React</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">TypeScript</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">Tailwind</li>
        </ul>
        <a href="https://ehg-todo-app.netlify.app/" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1 mr-6">LIVE DEMO <img src={arrowIcon} alt="arrow" className="inline pb-1" /></a>
        <a href="https://github.com/enrihg/todo-app" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1">SEE ON GITHUB <img src={githubIcon} alt="Github" className="inline pb-1" /></a>
      </article>
      <article className="my-10">
        <a href="https://enrihg.github.io/calculator-app/" target="_blank" className="block px-4 py-8 bg-200 dark:bg-950 rounded-lg"><img src={calculator} alt="calculator preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">Calculator</h3>
        <p className="text-800 dark:text-250 mb-4">En este proyecto cree una calculadora básica con la opción de cambiar entre 3 temas disponibles.</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">HTML</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">SASS</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">JavaScript</li>
        </ul>
        <a href="https://enrihg.github.io/calculator-app/" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1 mr-6">LIVE DEMO <img src={arrowIcon} alt="arrow" className="inline pb-1" /></a>
        <a href="https://github.com/enrihg/calculator-app" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1">SEE ON GITHUB <img src={githubIcon} alt="Github" className="inline pb-1" /></a>
      </article>
      <article className="my-10">
        <a href="https://github-user-search-app2.netlify.app/" target="_blank" className="block px-4 py-8 bg-200 dark:bg-950 rounded-lg"><img src={githubUserSearch} alt="github user search preview" className="rounded-lg" /></a>
        <h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">Github user search app</h3>
        <p className="text-800 dark:text-250 mb-4">El proyecto consta de una aplicación para buscar usuarios de Github.</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">TypeScript</li>
          <li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">Tailwind</li>
        </ul>
        <a href="https://github-user-search-app2.netlify.app/" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1 mr-6">LIVE DEMO <img src={arrowIcon} alt="arrow" className="inline pb-1" /></a>
        <a href="https://github.com/enrihg/github-user-search-app" target="_blank" className="font-bold text-600 dark:text-300 border-b-2 border-600 dark:border-300 pb-1">SEE ON GITHUB <img src={githubIcon} alt="Github" className="inline pb-1" /></a>
      </article>
    </section>
  )
}

export default Projects