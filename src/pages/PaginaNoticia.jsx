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
    <div className="noticia-wrapper">
      <div className="noticia-container">
        <button className="btn-voltar" onClick={() => navigate('/')}>
          ← Voltar
        </button>

        <h1 className="noticia-titulo">{noticia.title}</h1>

        <p className="noticia-meta">
          {noticia.author?.rendered} • {noticia.publish_date}
          {noticia.category?.name && ` • ${noticia.category.name}`}
        </p>

        {noticia.featured_media?.image?.url && (
          <img
            className="noticia-imagem"
            src={noticia.featured_media.image.url}
            alt={noticia.title}
          />
        )}

        <div
          className="noticia-conteudo"
          dangerouslySetInnerHTML={{
            __html: noticia.content?.content || noticia.content?.raw || noticia.excerpt
          }}
        />
      </div>
    </div>
  )
}

export default PaginaNoticia