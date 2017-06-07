'use strict';

module.exports = function(api) {
	var apiData = api;
	return {
		postMethod: require('./post.js'),
		post: function(postData, callback) {
			this.postMethod(apiData, postData, callback);
		}
	}
}
