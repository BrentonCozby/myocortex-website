import './contact_me.js'

import '../scss/index.scss'

// import views so they can live-reload during development
if (process.env.NODE_ENV === 'development') {
    // pages
    require('../views/pages/index.pug')
    require('../views/pages/404.pug')

    // partials & sections
    require('../views/layout.pug')
    require('../views/partials/head.pug')
    require('../views/partials/footer.pug')
}

$(function() {

})
