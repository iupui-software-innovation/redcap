'use strict';

var post = require('../utils/post.js');

var project = {};

project.exportInfo = function(params, callback) {
	var body = {
		content: 'project',
		format: 'json',
		returnFormat: 'json'
	}

	post(body, callback);
}

module.exports = project;
