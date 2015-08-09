'use strict';
var test = require('ava');
var xdgScreensaver = require('./');

test(function (t) {
	t.plan(1);

	xdgScreensaver(function (err) {
		t.assert(!err, err);
	});
});
