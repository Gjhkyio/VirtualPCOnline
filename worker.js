const filesToCache = [
	"index.htm",
	"VirtualPC.iso",
	"VirtualPC.js",
	"VirtualPC.json",
	"VirtualPC.png",
	"VirtualPC.wasm",
	"VirtualPCBIOS.bin",
	"VirtualPCLoader.js",
	"VirtualPCVGA.bin"
];

const staticCacheName = "virtualpc-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});
