import './contact_me.js'
import '../scss/index.scss'

import throttle from 'lodash.throttle'
import smoothScrollInit from './smooth-scroll.js'
import {
    playAnimations,
    mainLogo,
    largeStatement,
    respectTheProcessTitle
} from './animations.js'

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

    smoothScrollInit()


    function onScroll() {
        playAnimations()
        mainLogo()
        largeStatement()
        respectTheProcessTitle()
    }
    $(document).scroll(throttle(onScroll, 100))
})
