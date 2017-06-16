'use strict';

module.exports = function(apiData) {
	return {
		post: require('./post.js')(apiData),
<<<<<<< HEAD
		keyCheck: require('./keyCheck.js')		
=======
		keyCheck: require('./keyCheck.js')
>>>>>>> master
	}
}
