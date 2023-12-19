const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'http://localhost:8080',
    changeOrigin: true
}

module.exports = function(app) {
  app.use(
    '/api',  // Use a wildcard path or a specific path that matches your routes
    createProxyMiddleware(proxy)
  );
};
