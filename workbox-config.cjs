module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{html,js,css,png,jpg,json,svg}"],
  swDest: "build/service-worker.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources-cache",
      },
    },
    {
      urlPattern: /^https:\/\/api\.example\.com\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        networkTimeoutSeconds: 10,
      },
    },
  ],
};
