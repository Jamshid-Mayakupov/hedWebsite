import { apiClient } from '@/utils/http'
import { buildFileUrl } from '@/utils/media'
import { createListResource } from './resource'
import { createCanonicalSlug, matchesRouteSlug } from './slugs'

function asText(value) {
  return value === null || value === undefined ? '' : String(value).trim()
}

export function normalizeProduct(rawProduct = {}) {
  const id = rawProduct.id ?? rawProduct.productId ?? ''
  const name = asText(rawProduct.name ?? rawProduct.title)
  const fileId = rawProduct.fileId ?? rawProduct.documentId ?? ''
  const imageUrl = asText(rawProduct.imageUrl) || buildFileUrl(fileId)

  return {
    id,
    slug: createCanonicalSlug(name, id),
    name,
    manufacturer: asText(rawProduct.manufacturer),
    description: asText(rawProduct.description),
    link: asText(rawProduct.link),
    fileId,
    imageUrl,
    // Temporary compatibility alias for existing card components.
    image: imageUrl,
  }
}

function extractProducts(payload) {
  const products = payload?.data?.responseProducts ?? payload?.responseProducts ?? payload?.data ?? payload
  return Array.isArray(products) ? products : []
}

export async function fetchProducts({ signal } = {}) {
  const response = await apiClient.get('/api/hed-site/products/all', { signal })
  return extractProducts(response.data).map(normalizeProduct)
}

export async function findProductByRouteSlug(slug, { signal } = {}) {
  const products = await fetchProducts({ signal })
  return products.find((product) => matchesRouteSlug(product, slug, 'name')) || null
}

function toProductPayload(product) {
  return {
    ...(product.id !== null && product.id !== undefined && product.id !== '' ? { id: product.id } : {}),
    name: asText(product.name),
    description: asText(product.description),
    link: asText(product.link),
    manufacturer: asText(product.manufacturer),
    fileId: product.fileId ?? '',
  }
}

export async function createProduct(product, { signal } = {}) {
  const response = await apiClient.post('/api/hed-site/products', toProductPayload(product), { signal })
  return response.data
}

export async function updateProduct(product, { signal } = {}) {
  const response = await apiClient.put('/api/hed-site/products/update', toProductPayload(product), { signal })
  return response.data
}

export async function deleteProduct(productId, { signal } = {}) {
  const response = await apiClient.delete('/api/hed-site/products/delete', {
    params: { id: productId },
    signal,
  })
  return response.data
}

export function createProductsResource() {
  return createListResource(fetchProducts)
}
