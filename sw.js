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
    "url": "webpack-runtime-6e9122cdc3f717786fff.js"
  },
  {
    "url": "styles.dfb0d1549eaa8f815bca.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-741ade27086b2708e961.js"
  },
  {
    "url": "app-3a03003c5c1c677b6bb5.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "54864063a7d04e9f9afc1ebdfa909920"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ad6431e4664bcf916d19.js"
  },
  {
    "url": "polyfill-be86a901e9758c946004.js"
  },
  {
    "url": "d5d7a013bc6c1e2b6d7db819052c16d7efea5559-a5a0f5aa303d9e958084.js"
  },
  {
    "url": "component---src-pages-404-js-542975ec4fcf3fc20871.js"
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
    "revision": "87eeddcf7bf772114b255d786c666b64"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "a1cb0d5ae9dbb0560cddc040e2c44c10"
  },
  {
    "url": "cd7d5f864fc9e15ed8adef086269b0aeff617554-3a96455548489f123a4f.js"
  },
  {
    "url": "component---src-templates-blog-post-js-a83a709138e39ede7f08.js"
  },
  {
    "url": "page-data/fraud-detection/page-data.json",
    "revision": "c6737407bfda5764efc3b266b47b1063"
  },
  {
    "url": "page-data/sq/d/521915702.json",
    "revision": "9c6dbf0fccd353a97d542ed3f8168dc1"
  },
  {
    "url": "component---src-pages-index-js-18933eb44d5c10961c8a.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "80cdfe93a6e654a4a1fad9b6bec6c138"
  },
  {
    "url": "page-data/price-recommendations/page-data.json",
    "revision": "2dfac97dc1795792de45c3c761aa5463"
  },
  {
    "url": "page-data/promo-codes/page-data.json",
    "revision": "cf414fe70d99e77d3b52d473914edfb7"
  },
  {
    "url": "page-data/static-pages/page-data.json",
    "revision": "a9351716dc3621dc222e2f44cbd789ad"
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
  if (!resources || !(await caches.match(`/app-3a03003c5c1c677b6bb5.js`))) {
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
