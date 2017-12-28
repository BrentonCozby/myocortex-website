// Add selectors here and they will all have the class 'scroll-visible'
// added to them when they scroll into view
const selectors = [
    $('#process .title'),
    $('#three-women'),
    $('.appear'),
]

const animElements = []

function populateElements() {
    selectors.forEach($selector => {
        $selector.each((i, el) => {
            animElements.push({ element: $(el), position: null })
        })
    })
}

function getPositions() {
    populateElements()

    animElements.forEach($el => {
        $el.position = $el.element.offset().top
    })
}

const supportPageOffset = window.pageXOffset !== undefined
const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
const windowScroll = () => {
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
}
let windowHeight = null
let offset = 150

function playAnimations() {
    animElements.forEach(el => {
        const triggerPoint = +el.position - +windowHeight + +offset
        if (windowScroll() > triggerPoint) {
            el.element.addClass('scroll-visible')
        } else {
            el.element.removeClass('scroll-visible')
        }
    })
}
export { playAnimations }

$(document).ready(() => {
    setInterval(() => {
        windowHeight = $(window).height()
        offset = windowHeight * 0.1
        getPositions()
        playAnimations()
    }, 500)
})

const $mainLogoContainer = $('#main-logo-container')
function mainLogo() {
    if ($(window).width() <= 768 && windowScroll() > 80) {
        $mainLogoContainer.addClass('solid-bg')
    } else {
        $mainLogoContainer.removeClass('solid-bg')
    }
}
export { mainLogo }

function switchLogo(page) {
    const $topSection = $(`section.${page}.top`)

    if ($topSection.length === 0 || $(window).width() < 768) {
        return
    }

    const height = $topSection.height()
    const $mainLogo = $('#main-logo-container .main-logo')

    if (windowScroll() > height - 15) {
        $mainLogo.attr('src', '../images/logos/myocortex_logo_black.svg')
    } else {
        $mainLogo.attr('src', '../images/logos/myocortex_logo_white.svg')
    }
}
export { switchLogo }

const $ctaTitle = $('#cta .title')
function ctaTitle() {
    let topOffset = 100
    let multiplier = 0.3

    if ($(window).width() > 1200) {
        topOffset = 100
        multiplier = 0.3
    }

    if ($ctaTitle.length) {
        const adjustment = (windowScroll() - $ctaTitle.offset().top) * multiplier
        $ctaTitle.css({
            transform: `translate(-50%, ${adjustment + topOffset}px)`,
        })
    }
}
export { ctaTitle }
