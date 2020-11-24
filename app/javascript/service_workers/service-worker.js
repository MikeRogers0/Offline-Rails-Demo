console.log('Hey I am IN the server Worker');

import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';

registerRoute(
  ({request}) => true,
  new CacheFirst({
    cacheName: 'static-resources',
  })
);
