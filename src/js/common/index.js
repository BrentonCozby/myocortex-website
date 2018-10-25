/**
 *
 * All the code in this file will be bundled into a
 * 'common.js' file. By separating code that won't
 * change much as you push updates into production,
 * users' browsers can keep the common.js bundle
 * cached (as long as no changes were made to it),
 * allowing for faster repeat page load speeds.
 *
 */

window.$ = window.jQuery = require('jquery') // eslint-disable-line no-multi-assign

// Dump static code here
require('./errors.js')
require('./video.js')
require('./contact_me.js')
