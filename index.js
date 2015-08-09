'use strict';
var childProcess = require('child_process');

module.exports = function (cb) {
	childProcess.execFile('xdg-screensaver', ['activate'], function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb();
	});
};
