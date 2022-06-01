const CACHE_NAME = "phoneshop-1.0.0";
const urlsToCache = [
  "index.html",
  "favicon.ico",
  "logo192.png",
  "logo512.png",
  "manifest.json",
];
const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service worker installed");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  //Cache with network update
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        if (event.request.url.startsWith("chrome-extension")) return;

        let updatedResponse = fetch(event.request).then((newResponse) => {
          cache.put(event.request, newResponse.clone());
          return newResponse;
        });

        return response || updatedResponse;
      });
    })
  );
});

//Listen for messages
self.addEventListener("message", (event) => {
  if (event.data === "Update") {
    self.skipWaiting();
  } else {
    console.log(event.data);
  }
});
