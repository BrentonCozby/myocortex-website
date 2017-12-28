export default function initMenu() {
    const $menuButton = $('#menu-button')
    const $menuContainer = $('#menu-container')

    function toggleMenu() {
        $menuButton.toggleClass('open')
        $menuContainer.toggleClass('open')
    }

    $menuButton.click(toggleMenu)
    $menuContainer.find('.overlay').click(toggleMenu)
}
