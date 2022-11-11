/**
* Check is two strings are equal in lowercase
*
* For now, we will just use toLowerCase directly
*
* @param {String} string - String to compare
* @param {String} string2 - String to compare
* @returns {Boolean}
*/
define([], function() {
	return function(string, string2) {
		return string.toLowerCase() === string2.toLowerCase()
	}
})
