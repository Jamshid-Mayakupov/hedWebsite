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

export const requiredEnvironmentVariables = Object.freeze([])

export function getMissingEnvironmentVariables() {
  return []
}

export function getSiteUrl() {
  if (env.siteUrl) return env.siteUrl
  return typeof window !== 'undefined' ? window.location.origin : ''
}
