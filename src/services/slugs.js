const CYRILLIC_TO_LATIN = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i',
  й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't',
  у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '',
  э: 'e', ю: 'yu', я: 'ya',
}

function decodeRouteValue(value) {
  try {
    return decodeURIComponent(String(value ?? ''))
  } catch {
    return String(value ?? '')
  }
}

export function slugify(value) {
  return decodeRouteValue(value)
    .trim()
    .toLowerCase()
    .split('')
    .map((character) => CYRILLIC_TO_LATIN[character] ?? character)
    .join('')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
}

export function createCanonicalSlug(label, id) {
  const namePart = slugify(label)
  const idPart = slugify(id)
  if (namePart && idPart) return `${namePart}-${idPart}`
  return namePart || idPart
}

function createLegacyCyrillicSlug(value) {
  return decodeRouteValue(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\wа-яё-]+/gi, '')
    .replace(/-{2,}/g, '-')
}

export function matchesRouteSlug(item, routeSlug, labelKey) {
  const candidate = decodeRouteValue(routeSlug).toLowerCase()
  const label = item?.[labelKey] || ''
  return [
    item?.slug,
    item?.id,
    slugify(label),
    createLegacyCyrillicSlug(label),
  ].filter(Boolean).some((value) => String(value).toLowerCase() === candidate)
}
