import { http } from './http'

http.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)
