import Navbar from "./components/Navbar"
import MobileDrawer from "./components/MobileDrawer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"
import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className="font-inter bg-50 dark:bg-1000 text-1000 dark:text-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      <Header />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  )
}

export default App
