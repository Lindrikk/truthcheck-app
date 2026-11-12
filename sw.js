// Keeps the app shell available offline; the checker itself always loads live.
const CACHE = "truthcheck-shell-v1";
const SHELL = ["./", "index.html", "offline.html", "manifest.webmanifest", "favicon.png",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png",
  "icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (new URL(req.url).origin !== location.origin) return;   // the Streamlit app is never cached
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("offline.html")));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
