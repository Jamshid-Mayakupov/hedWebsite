import axios from 'axios'
import { env } from '@/config/env'
import { createServiceConfigurationError } from '@/utils/errors'
import { getSessionToken, handleUnauthorized } from '@/utils/session'

function createHttpClient({ baseURL, serviceName, contentType = 'application/json' }) {
  const client = axios.create({
    baseURL: baseURL || undefined,
    timeout: env.requestTimeoutMs,
    withCredentials: true,
    headers: contentType ? { 'Content-Type': contentType } : undefined,
  })

  client.interceptors.request.use((config) => {
    if (!baseURL) return Promise.reject(createServiceConfigurationError(serviceName))

    // A few legacy callers still pass an absolute development URL. Always route
    // those requests through the configured HTTPS origin instead.
    if (/^https?:\/\//i.test(config.url || '')) {
      const url = new URL(config.url)
      config.url = `${url.pathname}${url.search}`
    }

    const token = getSessionToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) handleUnauthorized()
      return Promise.reject(error)
    },
  )

  return client
}

export const apiClient = createHttpClient({
  baseURL: env.apiBaseUrl,
  serviceName: 'API',
})

export const authClient = createHttpClient({
  baseURL: env.authApiBaseUrl,
  serviceName: 'Auth API',
})

export const fileClient = createHttpClient({
  baseURL: env.fileApiBaseUrl,
  serviceName: 'File API',
  contentType: null,
})
