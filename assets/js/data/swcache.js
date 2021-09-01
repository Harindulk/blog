const resource = [ /* --- CSS --- */ '/Blog/assets/css/style.css', /* --- JavaScripts --- */ '/Blog/assets/js/dist/home.min.js', '/Blog/assets/js/dist/page.min.js', '/Blog/assets/js/dist/post.min.js', '/Blog/assets/js/dist/categories.min.js', '/Blog/assets/js/data/search.json', '/Blog/app.js', '/Blog/sw.js', /* --- HTML --- */ '/Blog/index.html', '/Blog/404.html', '/Blog/categories/', '/Blog/tags/', '/Blog/archives/', '/Blog/about/', /* --- Favicons --- */ '/Blog/assets/img/favicons/android-chrome-192x192.png', '/Blog/assets/img/favicons/android-chrome-512x512.png', '/Blog/assets/img/favicons/apple-touch-icon.png', '/Blog/assets/img/favicons/favicon-16x16.png', '/Blog/assets/img/favicons/favicon-32x32.png', '/Blog/assets/img/favicons/favicon.ico', '/Blog/assets/img/favicons/mstile-150x150.png', '/Blog/assets/img/favicons/site.webmanifest', '/Blog/assets/img/favicons/browserconfig.xml' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'harindulk.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
