// Add selectors here and they will all have the class 'scroll-visible'
// added to them when they scroll into view
let selectors = [
    $('#process .title'),
    $('#three-women'),
    $('.appear')
]

let animElements = []

function _populateElements() {
    selectors.forEach($selector => {
        $selector.each((i, el) => {
            animElements.push({element: $(el), position: null})
        })
    })
}

function _getPositions() {
    _populateElements()

    animElements.forEach($el => {
        $el.position = $el.element.offset().top
    })
}

const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
const windowScroll = function() {
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}
let windowHeight = null
let offset = 150

function playAnimations() {
    animElements.forEach(el => {
        const triggerPoint = +el.position - +windowHeight + +offset
        if(windowScroll() > triggerPoint)
            el.element.addClass('scroll-visible')
        else
            el.element.removeClass('scroll-visible')
    })
}
export { playAnimations }

$(document).ready(function() {
    setInterval(function() {
        windowHeight = $(window).height()
        offset = windowHeight * .1
        _getPositions()
        playAnimations()
    }, 500)
})

const $mainLogoContainer = $('#main-logo-container')
function mainLogo() {
    if($(window).width() <= 768 && windowScroll() > 80)
        $mainLogoContainer.addClass('black-bg')
    else
        $mainLogoContainer.removeClass('black-bg')
}
export { mainLogo }

function switchLogo(page) {
    const $topSection = $(`section.${page}.top`)
    if($topSection.length === 0) return false

    const height = $topSection.height()
    const $mainLogo = $('#main-logo-container .main-logo')

    if(windowScroll() > height - 15) {
        $mainLogo.attr('src', '../assets/images/logos/myocortex_logo_black.svg')
    } else {
        $mainLogo.attr('src', '../assets/images/logos/myocortex_logo_white.svg')
    }
}
export { switchLogo }

const $respectTheProcessTitle = $('#respect-the-process .title')
function respectTheProcessTitle() {
    if($respectTheProcessTitle.length) {
        const adjustment = (windowScroll() - $respectTheProcessTitle.offset().top) * .2
        $respectTheProcessTitle.css('transform', `translate(-50%, ${adjustment}px)`)
    }
}
export { respectTheProcessTitle }
