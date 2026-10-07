import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaMainNoticias from './pages/PaginaMainNoticias.jsx'
import PaginaNoticia from './pages/PaginaNoticia.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaMainNoticias />} />
        <Route path="/noticia/:slug" element={<PaginaNoticia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App