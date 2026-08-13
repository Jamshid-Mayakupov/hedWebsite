import Cookies from 'js-cookie'

const SESSION_COOKIE_NAME = 'jwtToken'
const SESSION_LIFETIME_MINUTES = 15
const unauthorizedListeners = new Set()

export function getSessionToken() {
  return Cookies.get(SESSION_COOKIE_NAME) || ''
}

export function hasSession() {
  return Boolean(getSessionToken())
}

export function setSessionToken(token) {
  const value = typeof token === 'string' ? token.trim() : ''
  if (!value) {
    clearSession()
    return
  }

  Cookies.set(SESSION_COOKIE_NAME, value, {
    expires: SESSION_LIFETIME_MINUTES / (24 * 60),
    sameSite: 'Strict',
    secure: true,
  })
}

export function clearSession() {
  Cookies.remove(SESSION_COOKIE_NAME, { sameSite: 'Strict', secure: true })
  Cookies.remove(SESSION_COOKIE_NAME)
}

export function onUnauthorized(listener) {
  if (typeof listener !== 'function') return () => {}
  unauthorizedListeners.add(listener)
  return () => unauthorizedListeners.delete(listener)
}

export function handleUnauthorized() {
  clearSession()
  unauthorizedListeners.forEach((listener) => listener())
}
