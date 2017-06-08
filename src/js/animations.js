// Add selectors here and they will all have the class 'scroll-visible'
// added to them when they scroll into view
let selectors = [
    $('#process .title'),
    $('.woman1'),
    $('.woman2'),
    $('.woman3')
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

$(document).ready(function() {
    setInterval(function() {
        windowHeight = $(window).height()
        offset = windowHeight * .1
        _getPositions()
    }, 1000)
})

export { playAnimations }

const $mainLogoContainer = $('#main-logo-container')
function mainLogo() {
    if($(window).width() <= 768 && windowScroll() > 80)
        $mainLogoContainer.addClass('black-bg')
    else
        $mainLogoContainer.removeClass('black-bg')
}

export { mainLogo }

const $largeStatement = $('.large-statement')
function largeStatement() {
    const adjustment = windowScroll() * .1
    $largeStatement.css('transform', `translateY(-${adjustment}%)`)
}

export { largeStatement }

const $respectTheProcessTitle = $('#respect-the-process .title')
function respectTheProcessTitle() {
    if($respectTheProcessTitle.length) {
        const adjustment = (windowScroll() - $respectTheProcessTitle.offset().top) * .2
        $respectTheProcessTitle.css('transform', `translate(-50%, ${adjustment}px)`)
    }
}

export { respectTheProcessTitle }
