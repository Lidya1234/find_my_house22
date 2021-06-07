const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/apityy',
    proxy({
      target: 'https://findlidushouse.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/apityy': '/',
      },
    }),
  );
};
