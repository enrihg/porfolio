import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="font-inter bg-50 dark:bg-1000 text-1000 dark:text-white transition-all-3s">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
