import { resolve } from 'path'

export const DEV_PATH = __dirname
export const PUBLIC_PATH = '/'

export const SITE_TITLE = 'Myocortex'
export const SITE_NAME = 'myocortex-website'
export const DESCRIPTION = 'Our Mission is to train muscles, not motions. MYOCORTEX is committed to strengthening the neuromuscular system with controlled movement and isometric exercises. Our goal is to build a healthy foundation while limiting breakdowns, pain and injures.'
export const SITE_URL = 'www.myocortex.com'
export const DEVELOPER_NAME = 'Brenton Cozby'
export const DEVELOPER_URL = 'https://brentoncozby.com'

const Dir = {
    dist: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
    css: resolve(__dirname, 'src', 'css'),
    js: resolve(__dirname, 'src', 'js'),
    misc: resolve(__dirname, 'src', 'misc'),
    images: resolve(__dirname, 'src', 'images'),
    vendor: resolve(__dirname, 'src', 'vendor'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    partials: resolve(__dirname, 'src', 'views', 'partials'),
}

export { Dir }
