import test from 'ava';
import xdgScreensaver from './';

test(t => {
	t.plan(1);

	xdgScreensaver(err => {
		t.assert(!err, err);
	});
});
