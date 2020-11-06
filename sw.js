/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-722bb681f26957715004.js"
  },
  {
    "url": "styles.dfb0d1549eaa8f815bca.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-de237a875aa45b276a9d.js"
  },
  {
    "url": "app-3aef6ae1be16a27067c1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e02513f4724e61234d5a8fee33248109"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ad6431e4664bcf916d19.js"
  },
  {
    "url": "polyfill-4036885dd14adc768b94.js"
  },
  {
    "url": "d5d7a013bc6c1e2b6d7db819052c16d7efea5559-74c6c1a5c728e0333bc1.js"
  },
  {
    "url": "component---src-pages-404-js-55b6da2b1ec314b976d2.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "c0eeb6a1ca79cac87ded7ed3a118d0c8"
  },
  {
    "url": "page-data/sq/d/3000541721.json",
    "revision": "6d82ce62c7a8245dc54a0fec00ba6f66"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b9bde33b57b934850d7ade53401e21f3"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "a1cb0d5ae9dbb0560cddc040e2c44c10"
  },
  {
    "url": "cd7d5f864fc9e15ed8adef086269b0aeff617554-eaf7a1eec27fc9d68c9c.js"
  },
  {
    "url": "component---src-templates-blog-post-js-a6e2c191b1039cfee6ea.js"
  },
  {
    "url": "page-data/fraud-detection/page-data.json",
    "revision": "88cf4c1986959e397981a760a1bd3e4b"
  },
  {
    "url": "page-data/sq/d/521915702.json",
    "revision": "db6c80a597b607809b80e3a81076e85f"
  },
  {
    "url": "component---src-pages-index-js-543bf474b550fe45f18c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "80cdfe93a6e654a4a1fad9b6bec6c138"
  },
  {
    "url": "page-data/price-recommendations/page-data.json",
    "revision": "ff5e7870d8ff7b656bcf456957a76c4d"
  },
  {
    "url": "page-data/promo-codes/page-data.json",
    "revision": "43c705df30394cde498527466b2b43cd"
  },
  {
    "url": "page-data/static-pages/page-data.json",
    "revision": "d30a020d1430a7ad3d453b23aa89ba13"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "35cd92095b4af34340f135148b0f12dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-3aef6ae1be16a27067c1.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
