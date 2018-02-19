import smoothScrollInit from './smooth-scroll'
import {
    playAnimations,
    mainLogo,
    ctaTitle,
    switchLogo,
} from './animations'
import initMenu from './menu'

$(() => {
    initMenu()
    smoothScrollInit()

    function onScroll() {
        playAnimations()
        mainLogo()
        ctaTitle()
        switchLogo('systems')
        switchLogo('tools')
    }

    $(document).scroll(throttle(onScroll, 100, { leading: true }))

    setTimeout(() => {
        if ($('#particles-js').length > 0) {
            particlesJS.load('particles-js', 'vendor/particlesjs/particlesjs-config.json', () => {

            })
        }
    }, 1000)
})
