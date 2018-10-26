import throttle from 'lodash.throttle'
import smoothScrollInit from './smooth-scroll'
import {
    playAnimations,
    mainLogo,
    ctaTitle,
    switchLogo,
} from './animations'
import initMenu from './menu'

$(document).ready(() => {
    initMenu()
    smoothScrollInit()

    document.addEventListener('scroll', throttle(() => {
        playAnimations()
        mainLogo()
        ctaTitle()
        switchLogo('systems')
        switchLogo('tools')
        switchLogo('nfl-combine-pro-day')
    }, 200, { leading: true }))

    setTimeout(() => {
        if ($('#particles-js').length > 0) {
            particlesJS.load('particles-js', 'vendor/particlesjs/particlesjs-config.json', () => {

            })
        }
    }, 1000)
})
