import './contact_me.js'
import './video.js'

import smoothScrollInit from './smooth-scroll.js'
import {
    playAnimations,
    mainLogo,
    respectTheProcessTitle,
    switchLogo
} from './animations.js'
import { initMenu } from './menu.js'


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
