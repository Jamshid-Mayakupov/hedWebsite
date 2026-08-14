import { apiClient } from '@/utils/http'
import { buildFileUrl } from '@/utils/media'
import { clearDocumentMediaCache, resolveDocumentGroupMedia } from './documents'
import { createListResource } from './resource'
import { createCanonicalSlug, matchesRouteSlug } from './slugs'

function asText(value) {
  return value === null || value === undefined ? '' : String(value).trim()
}

export function normalizeNews(rawNews = {}, media = {}) {
  const id = rawNews.id ?? rawNews.newsId ?? ''
  const title = asText(rawNews.title)
  const documentGroupId = rawNews.documentGroupId ?? rawNews.url ?? ''
  const fileId = rawNews.fileId ?? media.fileId ?? ''
  const imageUrl = asText(rawNews.imageUrl) || media.imageUrl || buildFileUrl(fileId)
  const summary = asText(rawNews.summary ?? rawNews.description)

  return {
    id,
    slug: createCanonicalSlug(title, id),
    title,
    summary,
    content: asText(rawNews.content ?? rawNews.description),
    date: rawNews.date || rawNews.dateTime || media.dateTime || '',
    category: asText(rawNews.category ?? rawNews.type),
    documentGroupId,
    fileId,
    imageUrl,
    // Temporary compatibility aliases for existing card/admin components.
    description: summary,
    image: imageUrl,
    url: documentGroupId,
  }
}

function extractNews(payload) {
  const news = payload?.data?.responseNews ?? payload?.responseNews ?? payload?.data ?? payload
  return Array.isArray(news) ? news : []
}

export async function fetchNews({ signal } = {}) {
  const response = await apiClient.get('/api/news/all', { signal })
  const siteNews = extractNews(response.data).filter((item) => !item.type || item.type === 'SITE_NEWS')

  return Promise.all(siteNews.map(async (item) => {
    if (item.fileId || !item.url) return normalizeNews(item)
    try {
      const media = await resolveDocumentGroupMedia(item.url, { signal })
      return normalizeNews(item, media)
    } catch (error) {
      if (signal?.aborted) throw error
      return normalizeNews(item)
    }
  }))
}

export async function findNewsByRouteSlug(slug, { signal } = {}) {
  const news = await fetchNews({ signal })
  return news.find((item) => matchesRouteSlug(item, slug, 'title')) || null
}

function toNewsPayload(news) {
  return {
    title: asText(news.title),
    description: asText(news.summary ?? news.description ?? news.content),
    type: 'SITE_NEWS',
    url: news.documentGroupId ?? news.url ?? '',
  }
}

export async function createNews(news, { signal } = {}) {
  const response = await apiClient.post('/api/news/save-send', toNewsPayload(news), { signal })
  return response.data
}

export async function updateNews(news, { signal } = {}) {
  const payload = { ...toNewsPayload(news), newsId: news.id ?? news.newsId }
  const response = await apiClient.put('/api/news', payload, { signal })
  clearDocumentMediaCache(payload.url)
  return response.data
}

export async function deleteNews(newsId, { signal } = {}) {
  const response = await apiClient.delete('/api/news', {
    params: { newsId },
    signal,
  })
  return response.data
}

export function createNewsResource() {
  return createListResource(fetchNews)
}
