import api from './api.js'

export const getAll = (params = {}) => {
  const { per_page = 12, category = null, search = null, page = 1 } = params

  const query = new URLSearchParams()
  query.append('per_page', per_page)
  query.append('page', page)
  if (category) query.append('category', category)
  if (search) query.append('search', search)

  return api.get(`/posts?${query.toString()}`)
}

export const getBySlug = (slug) => api.get(`/posts/${slug}`)