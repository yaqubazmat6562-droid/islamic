/* =========================================================
   ISLAMICWAY — SERVICE WORKER (PWA)
   Offline caching + install support
   ========================================================= */

const CACHE_NAME = "islamicway-v1.0.0";

/* Files to cache for offline use */
const CACHE_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./search.css",
    "./script.js",
    "./search.js",
    "./manifest.json",
    "./IMG 1.png"
];

/* =========================================================
   INSTALL EVENT
   ========================================================= */
self.addEventListener("install", (event) => {
    console.log("[SW] Installing...");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_FILES).catch((err) => {
                console.warn("[SW] Some files failed to cache:", err);
            });
        }).then(() => {
            return self.skipWaiting();
        })
    );
});

/* =========================================================
   ACTIVATE EVENT
   ========================================================= */
self.addEventListener("activate", (event) => {
    console.log("[SW] Activating...");

    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log("[SW] Deleting old cache:", key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

/* =========================================================
   FETCH EVENT (Offline support)
   ========================================================= */
self.addEventListener("fetch", (event) => {
    // Only handle GET requests
    if (event.request.method !== "GET") return;

    // Skip external APIs (let them go to network)
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) {
                // Return cached, update in background
                fetch(event.request).then((response) => {
                    if (response && response.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, response.clone());
                        });
                    }
                }).catch(() => {});
                return cached;
            }

            // Not in cache, fetch from network
            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200) {
                    return response;
                }

                const cloned = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, cloned);
                });

                return response;
            }).catch(() => {
                // Fallback for HTML navigation
                if (event.request.mode === "navigate") {
                    return caches.match("./index.html");
                }
            });
        })
    );
});

console.log("[SW] Service Worker registered successfully");