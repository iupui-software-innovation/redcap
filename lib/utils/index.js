'use strict';

module.exports = function(apiData) {
	return {
		post: require('./post.js')(apiData),
		keyCheck: require('./keyCheck.js')		
	}
}
