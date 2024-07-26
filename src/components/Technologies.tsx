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
import { useTranslation } from "react-i18next";

function Technologies() {
  const [t] = useTranslation("global");

  return (
    <section id="technologies" className="md:grid md:grid-cols-[30%_70%] pt-[70px] sm:pt-[78px] xl:pt-[130px] px-[5%] sm:px-[10%] xl:px-[15%] 2xl:px-[20%] pb-16 border-b border-gray-700">
      <h2 className="text-2xl xl:text-3xl mb-6 font-medium text-1000 dark:text-white">{t("technologies.title")}</h2>
      <ul className="grid grid-cols-4 2xl:grid-cols-6 gap-y-6 2xl:gap-y-12">
        <li className="text-center"><img src={iconHtml} alt="HTML" className="w-12 h-12 pb-1 mx-auto" />HTML</li>
        <li className="text-center"><img src={iconCss} alt="CSS" className="w-12 h-12 pb-1 mx-auto" />CSS</li>
        <li className="text-center"><img src={iconJavascript} alt="JavaScript" className="w-12 h-12 pb-1 mx-auto" />JavaScript</li>
        <li className="text-center"><img src={iconTypescript} alt="TypeScript" className="w-12 h-12 pb-1 mx-auto" />TypeScript</li>
        <li className="text-center"><img src={iconReact} alt="React" className="w-12 h-12 pb-1 mx-auto" />React</li>
        <li className="text-center"><img src={iconSass} alt="Sass" className="w-12 h-12 pb-1 mx-auto" />SaSS</li>
        <li className="text-center"><img src={iconTailwind} alt="Tailwind" className="w-12 h-12 pb-1 mx-auto" />Tailwind</li>
        <li className="text-center"><img src={iconGit} alt="Git" className="w-12 h-12 pb-1 mx-auto" />Git</li>
        <li className="text-center"><img src={iconGithub} alt="GitHub" className="w-12 h-12 pb-1 mx-auto" />GitHub</li>
        <li className="text-center"><img src={iconLinux} alt="Linux" className="w-12 h-12 pb-1 mx-auto" />Linux</li>
        <li className="text-center"><img src={iconFigma} alt="Figma" className="w-12 h-12 pb-1 mx-auto" />Figma</li>
      </ul>
    </section>
  )
}

export default Technologies