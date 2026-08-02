// lib/service-worker.js

import { build, files, version } from '$service-worker';

const CACHE = `tessera-${version}`;
const ASSETS = [...build, ...files];
const PRECACHE = [...ASSETS, '/'];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches
            .open(CACHE)
            .then((c) => c.addAll(PRECACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
            )
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        (async () => {
            const cache = await caches.open(CACHE);
            const url = new URL(e.request.url);
            if (ASSETS.includes(url.pathname)) {
                const hit = await cache.match(url.pathname);
                if (hit) return hit;
            }
            try {
                const res = await fetch(e.request);
                if (res.status === 200) {
                    cache.put(e.request, res.clone());
                }
                return res;
            } catch (err) {
                const hit = await cache.match(e.request);
                if (hit) return hit;
                throw err;
            }
        })()
    );
});
