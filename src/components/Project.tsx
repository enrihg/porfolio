import { useTranslation } from "react-i18next";
import Arrow from "../assets/icons/Arrow";
import Github from "../assets/icons/Github";

type ComponentProps = {
	name: string,
	img: string
	linkApp: string,
	linkGithub: string,
	technologies: [
		tech1: string,
		tech2?: string,
		tech3?: string,
		tech4?: string
	]
}

function Project({ name, img, linkApp, linkGithub, technologies }: ComponentProps) {
	const [t] = useTranslation("global");

	return (
		<article className="my-10">
			<a href={linkApp} target="_blank" className="block px-4 py-6 bg-100 dark:bg-950 rounded-lg hover:scale-105 transition"><img src={img} alt="project preview" className="rounded-lg" /></a>
			<h3 className="mt-8 mb-4 font-medium text-xl text-950 dark:text-white">{t(`projects.${name}.title`)}</h3>
			<p className="text-800 dark:text-250 mb-4">{t(`projects.${name}.description`)}</p>
			<ul className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
				{technologies.map((tech) => (
					<li className="bg-200 dark:bg-950 text-800 dark:text-400 font-medium rounded-lg px-3 py-[3px]">{tech}</li>
				))}
			</ul>
			<a href={linkApp} target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 mr-6 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.liveDemo")}<Arrow className={"inline fill-inherit"} width={24} height={25} /></a>
			<a href={linkGithub} target="_blank" className="font-bold text-sm text-600 hover:text-700 active:text-800 dark:text-300 dark:hover:text-400 dark:active:text-500 border-b-2 border-600 hover:border-700 active:border-800 dark:border-300 dark:hover:border-400 dark:active:border-500 pb-1 fill-600 hover:fill-700 active:fill-800 dark:fill-300 dark:hover:fill-400 dark:active:fill-500">{t("projects.seeOnGithub")}<Github className={"inline pb-1 fill-inherit"} width={24} height={24} /></a>
		</article>
	)
}

export default Project