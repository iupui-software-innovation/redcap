'use strict';

// Usage notes:
module.exports = function (apiData) {
  require ('./date.js');
	return {
		post: require('./post.js')(apiData),
		postFileUpload: require('./postFileUpload.js')(apiData),
		keyCheck: require('./keyCheck.js'),
	}
}
