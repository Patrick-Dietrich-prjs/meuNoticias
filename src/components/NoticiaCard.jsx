import { useNavigate } from 'react-router-dom'

function NoticiaCard({ noticia }) {
  const navigate = useNavigate()

  return (
    <div
      className="noticia-card"
      onClick={() => navigate(`/noticia/${noticia.slug}`)}
    >
      {noticia.featured_media?.image?.url && (
        <img
          className="noticia-card-imagem"
          src={noticia.featured_media.image.url}
          alt={noticia.featured_media.image.alt || noticia.title}
        />
      )}

      <div className="noticia-card-conteudo">
        <h2 className="noticia-card-titulo">{noticia.title}</h2>

        <p className="noticia-card-resumo">
          {noticia.excerpt?.substring(0, 130)}...
        </p>

        <small className="noticia-card-meta">
          {noticia.category?.name} • {noticia.publish_date}
        </small>
      </div>
    </div>
  )
}

export default NoticiaCard