'use strict';

module.exports = function(apiData) {
	return {
		post: require('./post.js')(apiData),
		postFileUpload: require('./postFileUpload.js')(apiData),
		keyCheck: require('./keyCheck.js'),
    date: require ('./date.js')
	}
}
