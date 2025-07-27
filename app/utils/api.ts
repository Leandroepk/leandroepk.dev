import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: 'https://localhost:3000/api',
})

api.interceptors.request.use((config) => {
  const session = Cookies.get('session')
  if (session) {
    config.headers.Authorization = `Bearer ${session}`
  }
  return config
})

api.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = navigator.language
  return config
})

export default api
