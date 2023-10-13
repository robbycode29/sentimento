module.exports = {
    devServer: {
      proxy: {
        '/scrape': {
          target: 'http://localhost:3000/scrape',
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/scrape': ''
          }
        }
      }
    }
  };
  