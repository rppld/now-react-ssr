const CACHE_NAME = 'now-react-ssr-cache-v1'
const URLS_TO_CACHE = [
  '/',
  '/bundle.js',
  '/style.css',
  'https://buttons.github.io/buttons.js',
  '/page-1',
  '/page-2',
]

async function cacheResources(caches) {
  const cache = await caches.open(CACHE_NAME)
  await cache.addAll(URLS_TO_CACHE)
}

async function handleRequest(event, caches) {
  const resourceFromCache = await caches.match(event.request)

  if (resourceFromCache) {
    return resourceFromCache
  }

  // Fetch, cache and return resource.
  const requestedResource = event.request.clone()
  const fetchedResource = await fetch(requestedResource)
  const cacheableResourceType =
    fetchedResource.type === 'basic' || fetchedResource.type === 'cors'
  const canBeCached =
    fetchedResource && fetchedResource.status === 200 && cacheableResourceType

  if (canBeCached) {
    const fetchedResourceForCache = fetchedResource.clone()
    const cache = await caches.open(CACHE_NAME)
    await cache.put(event.request, fetchedResourceForCache)
  }

  return fetchedResource
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheResources(caches))
})

self.addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event, caches))
})
