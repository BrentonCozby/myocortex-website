import {resolve} from 'path'

export const rootUrl = (process.env.NODE_ENV === 'production')
    ? '/myocortex-website/dist'
    : ''

export const title = 'MYOCORTEX'
export const description = 'MYOCORTEX is a premier (world-class) sport performance, health and wellness training facility that uses individual specific modalities to optimize human performance and function.'
export const site_url = 'myocortex.com'

export const Dir = {
    src: resolve(__dirname, 'src'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    assets: resolve(__dirname, 'assets'),
    images: resolve(__dirname, 'assets', 'images'),
    dist: resolve(__dirname, 'dist')
}
