# xdg-screensaver [![Build Status](https://travis-ci.org/kevva/xdg-screensaver.svg?branch=master)](https://travis-ci.org/kevva/xdg-screensaver)

> Start the screensaver


## Install

```
$ npm install --save xdg-screensaver
```


## Usage

```js
var xdgScreensaver = require('xdg-screensaver');

xdgScreensaver(function (err) {
	console.log('Screensaver started');
});
```


## API

### xdgScreensaver(callback)

#### callback

Type: `function`

Returns nothing but a possible exception.


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
