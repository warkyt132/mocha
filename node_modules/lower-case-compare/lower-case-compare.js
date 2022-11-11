const lowerCase = require('lower-case')

/**
* Check is two strings are equal in lowercase
*
* @param {String} string - String to compare
* @param {String} string2 - String to compare
* @returns {Boolean}
*/
module.exports = function (string, string2) {
	return lowerCase(string) === lowerCase(string2)
}
