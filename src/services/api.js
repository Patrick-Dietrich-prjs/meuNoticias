import axios from 'axios'

const api = axios.create({
  baseURL: 'https://admin.cnnbrasil.com.br/wp-json/content/v1'
})

export default api