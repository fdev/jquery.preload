# jQuery.preload

A tiny jQuery plugin for preloading assets (images, sounds, anything).

## Description

The purpose of this plugin is to provide preloading functionality with a tiny footprint.
When minified the plugin is a mere 391 bytes (**290 bytes** when gzipped).

## Browser support

This plugin works on browsers supporting `XMLHttpRequest`, which should be any modern browser, mobile browser and IE 7+.

## Dependencies

* jQuery (or compatible containing Deferred)
* Cache headers on assets

Preloading will only work if assets can be cached by the browser. This way, when the assets are actually used they can be fetched from the browser cache.

## Usage

Import this plugin after importing the jQuery library:

```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.preload.min.js"></script>
```

### Simple preloading

You can pass an array of assets.

```javascript
$.preload([
	'images/background.jpg',
	'images/button.png',
	'images/logo.svg',
	'sounds/button.mp3',
	'files/document.pdf'
])
```

### Events

The preloader returns a promise you can use to execute a function when:

* all assets are loaded
* an asset failed to load
* there is progress

```javascript
$.preload([
	'images/background.jpg',
	'images/button.png',
	'images/logo.svg',
	'sounds/button.mp3',
	'files/document.pdf'
]).then(function() {
	console.debug("All done.")
}, function() {
	console.error("Something went wrong.")
}, function(progress) {
	console.debug(Math.round(progress * 100) + '%')
})
```
