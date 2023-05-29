import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Diseño de Sitios Web</h1>
      <div className="card">
        <h3>Mauricio Gómez Flórez</h3>
        <h6>Enlace al proyecto web</h6>
        <a href="inicio.html">Click para ingresar al proyecto</a>
      </div>
      <p className="read-the-docs">
        Mayo 2023
      </p>
    </>
  )
}

export default App
