import iconHtml from "../assets/icons/html.png"
import iconCss from "../assets/icons/css.png"
import iconJavascript from "../assets/icons/javascript.png"
import iconTypescript from "../assets/icons/typescript.png"
import iconReact from "../assets/icons/react.png"
import iconSass from "../assets/icons/sass.png"
import iconTailwind from "../assets/icons/tailwind.png"
import iconGit from "../assets/icons/git.png"
import iconGithub from "../assets/icons/github.png"
import iconLinux from "../assets/icons/linux.png"
import iconFigma from "../assets/icons/figma.png"

function Skills() {
    return (
      <section id="skills">
        <h2 className="font-bold text-2xl">Habilidades</h2>
        <div>
          <div><img src={iconHtml} alt="HTML" />HTML</div>
          <div><img src={iconCss} alt="CSS" />CSS</div>
          <div><img src={iconJavascript} alt="JavaScript" />JavaScript</div>
          <div><img src={iconTypescript} alt="TypeScript" />TypeScript</div>
          <div><img src={iconReact} alt="React" />React</div>
          <div><img src={iconSass} alt="Sass" />SaSS</div>
          <div><img src={iconTailwind} alt="Tailwind" />Tailwind</div>
          <div><img src={iconGit} alt="Git" />Git</div>
          <div><img src={iconGithub} alt="GitHub" />GitHub</div>
          <div><img src={iconLinux} alt="Linux" />Linux</div>
          <div><img src={iconFigma} alt="Figma" />Figma</div>
        </div>
      </section>
    )
}

export default Skills