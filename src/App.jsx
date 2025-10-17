import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Home from './components/Home'
import Skills from './components/Skills'
import TechStacks from './components/TechStacks'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    })
  }, [])

  return (
    <div className="App">
      <Home />
      <Skills />
      <TechStacks />
      <Contact />
    </div>
  )
}

export default App
