/**
 * jquery.preload v1.0.0
 * https://github.com/fdev/jquery.preload
 *
 * © 2015 Folkert de Vries <info@fdev.nl>
 * Released under MIT License
 */
(function($) {
	function load(uri, callback) {
		var xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4)
				callback(xhr.status == 200)
		}
		xhr.open('GET', uri, true)
		xhr.send(null)
	}

	$.preload = function(files) {
		var loaded = 0
		var total = files.length
		var defer = $.Deferred()
		for (var i = 0; i != total; ++i) {
			load(files[i], function(success) {
				if (!success)
					return defer.reject()
				defer.notify(++loaded / total)
				if (loaded == total)
					defer.resolve()
			})
		}
		return defer
	}
})(jQuery)