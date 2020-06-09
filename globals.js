const { resolve } = require('path')

// Use the following variables in src/views and src/js. They are made available in
// build-tools/ejs-to-html.js in the 'transformer' function and in webpcak.config.js

module.exports.PP = ''
module.exports.DEV_PATH = __dirname
module.exports.SITE_TITLE = 'Myocortex'
module.exports.SITE_NAME = 'myocortex-website'
module.exports.DESCRIPTION = 'Our Mission is to train muscles, not motions. MYOCORTEX is committed to strengthening the neuromuscular system with controlled movement and isometric exercises. Our goal is to build a healthy foundation while limiting breakdowns, pain, and injuries.'
module.exports.SITE_URL = 'www.myocortex.com'
module.exports.CARD_IMAGE = 'images/logos/myocortex-logo.png'
module.exports.DEVELOPER_NAME = 'Brenton Cozby'
module.exports.DEVELOPER_URL = 'https://brentoncozby.com'
module.exports.GOOGLE_ANALYTICS_ID = ''

module.exports.Dir = {
  dist: resolve(__dirname, 'dist'),
  src: resolve(__dirname, 'src'),
  css: resolve(__dirname, 'src', 'css'),
  js: resolve(__dirname, 'src', 'js'),
  utils: resolve(__dirname, 'src', 'js', 'utils'),
  static: resolve(__dirname, 'src', 'static'),
  favicons: resolve(__dirname, 'src', 'favicons'),
  images: resolve(__dirname, 'src', 'static', 'images'),
  videos: resolve(__dirname, 'src', 'static', 'videos'),
  vendor: resolve(__dirname, 'src', 'vendor'),
  views: resolve(__dirname, 'src', 'views'),
  pages: resolve(__dirname, 'src', 'views', 'pages'),
  partials: resolve(__dirname, 'src', 'views', 'partials')
}
