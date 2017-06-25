

export function initMenu() {
    const $menuButton = $('#menu-button')
    const $menuContainer = $('#menu-container')

    function _toggleMenu() {
        $menuButton.toggleClass('open')
        $menuContainer.toggleClass('open')
    }

    $menuButton.click(_toggleMenu)
    $menuContainer.find('.overlay').click(_toggleMenu)
}
