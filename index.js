'use strict';
const execa = require('execa');

module.exports = () => execa('xdg-screensaver', ['activate']);
