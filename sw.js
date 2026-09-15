/* =========================================================
   ISLAMICWAY — SERVICE WORKER (FIXED)
   ========================================================= */

const CACHE_NAME = "islamicway-v1.1.0";

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

self.addEventListener("install", (event) => {
    console.log("[SW] Installing...");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_FILES).catch((err) => {
                console.warn("[SW] Some files failed to cache:", err);
            });
        }).then(() => self.skipWaiting())
    );
});

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
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    const url = new URL(event.request.url);

    // Skip external APIs (let them go to network)
    if (url.origin !== self.location.origin) {
        event.respondWith(
            fetch(event.request).catch(() => {
                return new Response(
                    JSON.stringify({ error: "Offline", message: "No internet connection" }),
                    { status: 503, headers: { "Content-Type": "application/json" } }
                );
            })
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) {
                fetch(event.request).then((response) => {
                    if (response && response.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, response.clone());
                        });
                    }
                }).catch(() => {});
                return cached;
            }

            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200) return response;

                const cloned = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, cloned);
                });

                return response;
            }).catch(() => {
                // ✅ OFFLINE FALLBACK
                if (event.request.mode === "navigate") {
                    return caches.match("./index.html");
                }
                return new Response("Offline", { status: 503 });
            });
        })
    );
});

console.log("[SW] Service Worker registered successfully");