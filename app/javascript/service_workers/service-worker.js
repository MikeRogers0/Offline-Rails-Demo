import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

// Used for filtering matches based on status code, header, or both
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// Used to limit entries in cache, remove entries after a certain period of time
import { ExpirationPlugin } from 'workbox-expiration';

// Loading pages, checks the network first
registerRoute(
  ({request}) => (console.log(request) && false) ||
  request.destination === "document",
  new NetworkFirst({
    cacheName: 'documents',
  })
);

// For assets, we check the cache first
registerRoute(
  ({request}) => request.destination === "script" ||
  request.destination === "style",
  new CacheFirst({
    cacheName: 'assets-styles-and-scripts',
  })
);

// For assets, we check the cache first
registerRoute(
  ({request}) => request.destination === "image",
  new CacheFirst({
    cacheName: 'assets-images',
  })
);
