'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ccd531fba1551581839424ffc5fa4c09",
"version.json": "ce146a427a2c1c9110878498fd558f0c",
"index.html": "11966872ca60f142e60c45e75451173f",
"/": "11966872ca60f142e60c45e75451173f",
"main.dart.js": "69d7aa0020b0f9cef83582f307cab834",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "61f0787c3e3ae59cf632d75f3b2dc7ae",
"assets/AssetManifest.json": "b8fb2c5c3079e1f75e2bfa4360e5caea",
"assets/NOTICES": "ef8d0dedd4895aae4717a0d2bd1f5e23",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3386fe5cb1ee146df95149b84c304ed5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "910496687bdac94c8e1c98d0ea4b6080",
"assets/fonts/MaterialIcons-Regular.otf": "779b2075fc0440a9fdb903c44a6dcd62",
"assets/assets/images/email.png": "4cef03675a4f6ef35c9cd52e1b84e434",
"assets/assets/images/ic_term.png": "5080f0af762e99dbd12c821f80b37778",
"assets/assets/images/qr_circle.png": "a0eafc947d9188f58b465c9f61bffb65",
"assets/assets/images/pw_qtech.png": "cff0195c869e08828df69a5dfd17c2d0",
"assets/assets/images/ic_about.png": "8ef5291e7201658c8afb01f9c46dc6de",
"assets/assets/images/app_icon.png": "087a98402a123dc912adc2987bfb2010",
"assets/assets/images/thunder.png": "1a24b94fc63f5e0494ca2fb1f0b64c5d",
"assets/assets/images/calender.png": "923fe3009c0443f5a26bae143fd99661",
"assets/assets/images/support_new.png": "8bcef33f7c7d7077ba6e3763459fbbc7",
"assets/assets/images/verified.png": "acacbfc73e0757da7979741b961059ea",
"assets/assets/images/banner1.jpg": "66d322f2bf977881a90e1a17415fa3f7",
"assets/assets/images/ic_privacy.png": "0016e543d80e5f1846c467bb43c72a82",
"assets/assets/images/invoice_icon.png": "16d97da315436f2cf79f31acdcb9e68c",
"assets/assets/images/account.png": "d4ab299874b96d5e47f561775012d852",
"assets/assets/images/offer_banner.png": "800b645d76ddef84f49ca1c88feb90ef",
"assets/assets/images/bhim_upi.png": "e4d5eff512131c1c3b6ed023ff78a9f1",
"assets/assets/images/small_logo.png": "51191e8ff585a6dbc7e2f3d472e84f44",
"assets/assets/images/graph_img.png": "f4787328e2d14cd5d3644d8a2c06c6bd",
"assets/assets/images/history.png": "ebf9a31a15823f1fd9d02ed911dec894",
"assets/assets/images/vertical_appicon.png": "30372c153ad3bc5e1cdb0c7068c460e4",
"assets/assets/images/balance.png": "d903c3c3ac1f678e9b42664720dfa8d0",
"assets/assets/images/quintus_pay.png": "51191e8ff585a6dbc7e2f3d472e84f44",
"assets/assets/images/notifications.png": "c7056e41864b8384bec0c1e5e42d06c3",
"assets/assets/images/business.png": "e0b6d1799b2d62a14392c99b04122812",
"assets/assets/images/app_icon_light.png": "ebc0ce3c48dff30c159bbbf1fbb80aa2",
"assets/assets/images/profile.png": "febd67d2d75ef53d38ae4a308b1fd8da",
"assets/assets/images/location.png": "cad7901e786eda3c999e08849298172a",
"assets/assets/images/call.png": "154faceb507ac6365606d396fb080b18",
"assets/assets/images/demo_qr.png": "45631a503a0307c9b5dc4812778a9e7d",
"assets/assets/images/circle_image.png": "5da34bb4d494526d1d638c2e9ef856e4",
"assets/assets/images/whatsapp.png": "adaf276e73434b921a34f17355b64a42",
"assets/assets/images/home_ic.png": "03867860176f287d3fba4988a3495cf7",
"assets/assets/images/horizontal_appicon.png": "b23a9cdf8804bc775aefd5795de0b49d",
"assets/assets/images/quintus_logo.webp": "46d73130a159a65053c9de939cb7e4c9",
"assets/assets/lottie/checked.json": "2f6fc47fe3424c11055396377479c4e3",
"assets/assets/lottie/under_process.json": "3b9c7c454edade0b3383b726e62e29a5",
"assets/assets/fonts/PoppinsBold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/fonts/PoppinsRegular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/fonts/PoppinsMedium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/fonts/MontserratMedium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/PoppinsSemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
