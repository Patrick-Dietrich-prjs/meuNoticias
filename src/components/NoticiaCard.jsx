import { useNavigate } from 'react-router-dom'

function NoticiaCard({ noticia }) {
  const navigate = useNavigate()

  return (
    <div
      className="projeto-card"
      onClick={() => navigate(`/noticia/${noticia.slug}`)}
    >
      {noticia.featured_media?.image?.url && (
        <img
          src={noticia.featured_media.image.url}
          alt={noticia.featured_media.image.alt || noticia.title}
        />
      )}

      <h2 className="projeto-card-title">{noticia.title}</h2>

      <p>
        {noticia.excerpt?.substring(0, 120)}...
      </p>

      <small>
        {noticia.category?.name} • {noticia.publish_date}
      </small>
    </div>
  )
}

export default NoticiaCard