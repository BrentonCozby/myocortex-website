import './contact_me.js'
import './video.js'
import '../scss/index.scss'

import throttle from 'lodash.throttle'
import smoothScrollInit from './smooth-scroll.js'
import {
    playAnimations,
    mainLogo,
    respectTheProcessTitle,
    switchLogo
} from './animations.js'
import { initMenu } from './menu.js'

// import views so they can live-reload during development
if (process.env.NODE_ENV === 'development') {
    // pages
    require('../views/pages/homepage.pug')
    require('../views/pages/analysis.pug')
    require('../views/pages/systems.pug')
    require('../views/pages/tools.pug')
    require('../views/pages/404.pug')
    require('../views/pages/about.pug')
    require('../views/pages/sign-up.pug')

    // partials & sections
    require('../views/layout.pug')
    require('../views/partials/head.pug')
    require('../views/partials/footer.pug')
}

$(function() {

    initMenu()
    smoothScrollInit()

    function onScroll() {
        playAnimations()
        mainLogo()
        respectTheProcessTitle()
        switchLogo('systems')
        switchLogo('tools')
    }
    $(document).scroll(throttle(onScroll, 100))

    setTimeout(function() {
        if($('#particles-js').length > 0) {
            particlesJS.load('particles-js', 'vendor/particlesjs/particlesjs-config.json', function() {

            });
        }
    }, 1000)
})
