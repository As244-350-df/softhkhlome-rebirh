import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Policy from './pages/Policy'
import TermsMod from './components/TermsMod'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import "./index.css"
import "bootstrap-icons/font/bootstrap-icons.css"
//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Terms" element={<TermsMod />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
