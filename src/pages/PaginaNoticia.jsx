import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBySlug } from '../services/NoticiaService.js'

function PaginaNoticia() {
  const [noticia, setNoticia] = useState(null)
  const [loading, setLoading] = useState(true)
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!slug) return

    setLoading(true)

    getBySlug(slug)
      .then(response => {
        setNoticia(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao carregar notícia: ' + error)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return <div className="loading-message">Carregando matéria...</div>
  }

  if (!noticia) {
    return <div className="empty-message">Notícia não encontrada.</div>
  }

  return (
    <div className="parteProjeto-wrapper">
      <div className="container">
        <button className="update-btn" onClick={() => navigate('/')}>
          ← Voltar
        </button>

        <h1>{noticia.title}</h1>

        <p>
          {noticia.author?.rendered} • {noticia.publish_date}
          {noticia.category?.name && ` • ${noticia.category.name}`}
        </p>

        {noticia.featured_media?.image?.url && (
          <img
            src={noticia.featured_media.image.url}
            alt={noticia.title}
          />
        )}

        <div
          dangerouslySetInnerHTML={{
            __html: noticia.content?.content || noticia.content?.raw || noticia.excerpt
        }}/>
      </div>
    </div>
  )
}

export default PaginaNoticia