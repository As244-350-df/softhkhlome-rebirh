import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import "./index.css"
import "bootstrap-icons/font/bootstrap-icons.css"
//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App
