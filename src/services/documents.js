import { fileClient } from '@/utils/http'
import { buildFileUrl } from '@/utils/media'

const resolvedGroupCache = new Map()
const pendingGroupRequests = new Map()

export async function getDocumentsByGroup(documentGroupId, { signal } = {}) {
  if (documentGroupId === null || documentGroupId === undefined || documentGroupId === '') return []
  const response = await fileClient.get('/document/get-files-by-doc-group', {
    params: { id: documentGroupId },
    signal,
  })
  return Array.isArray(response.data) ? response.data : []
}

export async function resolveDocumentGroupMedia(documentGroupId, { signal } = {}) {
  const cacheKey = String(documentGroupId ?? '')
  if (!cacheKey) return { fileId: '', imageUrl: '', dateTime: '' }
  if (resolvedGroupCache.has(cacheKey)) return resolvedGroupCache.get(cacheKey)
  if (pendingGroupRequests.has(cacheKey)) return pendingGroupRequests.get(cacheKey)

  const request = getDocumentsByGroup(cacheKey, { signal })
    .then((documents) => {
      const document = documents[0]?.document || documents[0] || null
      const fileId = document?.id ?? document?.fileId ?? ''
      const media = {
        fileId,
        imageUrl: buildFileUrl(fileId),
        dateTime: document?.dateTime || '',
      }
      resolvedGroupCache.set(cacheKey, media)
      return media
    })
    .finally(() => pendingGroupRequests.delete(cacheKey))

  pendingGroupRequests.set(cacheKey, request)
  return request
}

export function clearDocumentMediaCache(documentGroupId) {
  if (documentGroupId === undefined) {
    resolvedGroupCache.clear()
    return
  }
  resolvedGroupCache.delete(String(documentGroupId))
}

export async function uploadDocument(file, groupName, { signal } = {}) {
  const formData = new FormData()
  formData.append('file', file)
  const response = await fileClient.post('/document/save-file', formData, {
    params: { docGrName: groupName },
    signal,
  })
  return response.data
}
