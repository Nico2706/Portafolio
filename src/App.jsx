import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Proyects/>
      <Contact/>
    </div>
  )
}

export default App
