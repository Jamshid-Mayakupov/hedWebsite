const viteEnv = import.meta.env || {}

function normalizeUrl(value) {
  return typeof value === 'string' ? value.trim().replace(/\/+$/, '') : ''
}

export const env = Object.freeze({
  siteUrl: normalizeUrl(viteEnv.VITE_SITE_URL),
  apiBaseUrl: normalizeUrl(viteEnv.VITE_API_BASE_URL),
  authApiBaseUrl: normalizeUrl(viteEnv.VITE_AUTH_API_BASE_URL),
  fileApiBaseUrl: normalizeUrl(viteEnv.VITE_FILE_API_BASE_URL),
  yandexMapsApiKey: String(viteEnv.VITE_YANDEX_MAPS_API_KEY || '').trim(),
  requestTimeoutMs: 12_000,
})

export const requiredEnvironmentVariables = Object.freeze([
  'VITE_SITE_URL',
  'VITE_API_BASE_URL',
  'VITE_AUTH_API_BASE_URL',
  'VITE_FILE_API_BASE_URL',
])

export function getMissingEnvironmentVariables() {
  const values = {
    VITE_SITE_URL: env.siteUrl,
    VITE_API_BASE_URL: env.apiBaseUrl,
    VITE_AUTH_API_BASE_URL: env.authApiBaseUrl,
    VITE_FILE_API_BASE_URL: env.fileApiBaseUrl,
  }

  return requiredEnvironmentVariables.filter((name) => !values[name])
}

export function getSiteUrl() {
  if (env.siteUrl) return env.siteUrl
  return typeof window !== 'undefined' ? window.location.origin : ''
}
