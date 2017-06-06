'use strict';

var post = require('../utils/post.js');

module.exports = function(params, callback) {
	var body = {
		content: 'project',
		format: 'json',
		returnFormat: 'json'
	}

	post(body, callback);
}

