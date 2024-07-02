import iconHtml from "./assets/icons/html.png"
import iconCss from "./assets/icons/css.png"
import iconJavascript from "./assets/icons/javascript.png"
import iconTypescript from "./assets/icons/typescript.png"
import iconReact from "./assets/icons/react.png"
import iconSass from "./assets/icons/sass.png"
import iconTailwind from "./assets/icons/tailwind.png"
import iconGit from "./assets/icons/git.png"
import iconGithub from "./assets/icons/github.png"
import iconLinux from "./assets/icons/linux.png"
import iconFigma from "./assets/icons/figma.png"

function App() {

  return (
    <div className="font-inter bg-50 text-950">
      <nav>
        <span>Logo</span>
        <ul>
          <li className="">Inicio</li>
          <li className=""><a href="#proyects">Proyectos</a></li>
          <li className=""><a href="#skills">Habilidades</a></li>
          <li className=""><a href="#contact">Contacto</a></li>
          <li className=""><button>Idioma</button></li>
          <li className=""><button>Light/dark</button></li>
        </ul>
      </nav>
      <header className="px-8 text-center">
        <h1 className="font-black text-[40px]">Hola, soy <span className="text-500">Enrique</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in perferendis dignissimos doloremque, vero officia modi architecto maiores possimus laudantium</p>
        <img src="" alt="profile picture" />
        <button>Ver CV</button>
      </header>
      <section id="proyects">
        <h2 className="font-bold text-2xl">Proyectos</h2>
        <div>
          <h3>Proyecto 1</h3>
          <p>descripción</p>
          <a href="#">Github</a>
          <a href="#">Live Preview</a>
        </div>
        <div>
          <h3>Proyecto 2</h3>
          <p>descripción</p>
          <a href="#">Github</a>
          <a href="#">Live Preview</a>
        </div>
        <div>
          <h3>Proyecto 3</h3>
          <p>descripción</p>
          <a href="#">Github</a>
          <a href="#">Live Preview</a>
        </div>
        <div>
          <h3>Proyecto 4</h3>
          <p>descripción</p>
          <a href="#">Github</a>
          <a href="#">Live Preview</a>
        </div>
        <div>
          <h3>Proyecto 5</h3>
          <p>descripción</p>
          <a href="#">Github</a>
          <a href="#">Live Preview</a>
        </div>
      </section>
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
      <section id="contact">
        <h2 className="font-bold text-2xl">Contacto</h2>
        <form action="">
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" placeholder="Nombre" />
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="Correo electrónico" />
          <label htmlFor="message">Escribe tu mensaje</label>
          <input id="message" type="text" placeholder="Escribe tu mensaje" />
          <button>Enviar</button>
        </form>
      </section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi magnam consectetur fugiat soluta natus minus provident deserunt voluptates cupiditate sapiente amet, quod molestias nostrum, error aperiam alias corrupti deleniti.
        Nisi quaerat, nobis at iusto quae est quam velit harum reiciendis et architecto beatae voluptas ratione nam voluptatum quo dolores nesciunt fugiat illum pariatur molestiae cumque obcaecati ipsum? Neque, nemo!
        Harum provident dolorum saepe nisi blanditiis nesciunt ullam, nihil distinctio minus laboriosam repellendus, quisquam quam? Esse, quia. Voluptate sunt exercitationem ipsam nisi, blanditiis perferendis molestiae amet aut voluptates quae laboriosam!
        Reprehenderit commodi sunt facilis hic necessitatibus. Perspiciatis, et dolorum unde laudantium sed nobis! Eaque quod excepturi harum, ad modi sapiente sequi saepe pariatur voluptatem, quos, quam incidunt enim deserunt fuga!
        Sapiente placeat sit quo rerum deleniti soluta, quibusdam officiis provident officia maiores, necessitatibus deserunt sint esse modi unde recusandae at suscipit nisi porro iste id tenetur rem. Quas, explicabo odit?
        Nihil doloribus sapiente eveniet, nulla maxime dicta incidunt! Quod vero distinctio neque maiores fugit tempora, magnam vel corrupti ducimus expedita, optio, nam unde. Quidem nulla repellendus provident, atque impedit excepturi.
        Expedita tempore, sapiente, ex eligendi perspiciatis voluptates quos distinctio, eveniet dignissimos quam sit. Consequatur ex fugiat ipsam obcaecati? Nisi in animi temporibus quis! Reiciendis fuga ipsum ducimus sed? Quia, eligendi.
        Assumenda aspernatur quasi deleniti cum amet corrupti voluptatem sunt labore, doloremque odit facere. Magni quasi odio possimus tenetur, unde molestiae sint earum esse, quibusdam cumque asperiores ipsa minima tempore sed.
        Placeat deleniti impedit aliquam dignissimos suscipit, qui distinctio ullam, asperiores voluptates sed eos porro pariatur sequi maiores assumenda hic! Minus ut doloremque omnis accusamus a ea non dolore. Velit, voluptas.
        Mollitia veniam aliquam explicabo eos neque eveniet deleniti? Aliquid doloremque dolorem porro, esse iure animi dolore ratione temporibus autem, exercitationem ipsam nesciunt magnam tempora voluptas rerum quaerat molestiae itaque sint!</p>
    </div>
  )
}

export default App
