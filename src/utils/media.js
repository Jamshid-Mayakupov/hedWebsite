import { env } from '@/config/env'

export function buildFileUrl(fileId) {
  if (fileId === null || fileId === undefined || fileId === '' || !env.fileApiBaseUrl) return ''
  return `${env.fileApiBaseUrl}/document/profile?id=${encodeURIComponent(String(fileId))}`
}
