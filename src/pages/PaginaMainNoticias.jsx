import { useState, useEffect } from 'react'
import { getAll } from '../services/NoticiaService.js'
import NoticiaCard from '../components/NoticiaCard.jsx'

function PaginaMainNoticias() {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoria, setCategoria] = useState('')
  const [busca, setBusca] = useState('')

  const categorias = [
    { label: 'Política', value: 'politica' },
    { label: 'Economia', value: 'economia' },
    { label: 'Nacional', value: 'nacional' },
    { label: 'Internacional', value: 'internacional' },
    { label: 'Tecnologia', value: 'tecnologia' },
  ]

  useEffect(() => {
    fetchNoticias()
  }, [categoria])

  function fetchNoticias() {
    setLoading(true)

    getAll({
      per_page: 12,
      category: categoria || null,
      search: busca || null,
    })
      .then(response => {
        setNoticias(response.data.posts || response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao buscar notícias: ' + error)
        setLoading(false)
      })
  }

  function handleBuscar() {
    fetchNoticias()
  }

  if (loading) {
    return <div className="loading-message">Carregando notícias...</div>
  }

  return (
    <div className="page">
      <h1 className="page-title">MeuNotícias</h1>

      <div>
        {categorias.map(categoria => (
          <button
            key={categoria.value}
            className="update-btn"
            onClick={() => setCategoria(categoria.value)}
          >
            {categoria.label}
          </button>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          value={busca}
          placeholder="Buscar notícias..."
          onChange={e => setBusca(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleBuscar()}
        />
        <button onClick={handleBuscar}>Buscar</button>
      </div>

      <div className="container-projetos">
        {noticias.length === 0 ? (
          <p className="empty-message">Nenhuma notícia encontrada.</p>
        ) : (
          noticias.map(noticia => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))
        )}
      </div>
    </div>
  )
}

export default PaginaMainNoticias