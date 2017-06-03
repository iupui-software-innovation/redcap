'use strict';

var https = require('https');
var querystring = require('querystring');

module.exports = function(postData, callback) {
	var api = require('../config.json');

	postData.token = api.token;

	var postBody = querystring.stringify(postData);

	var options = {
		hostname: api.host,
		path: api.path,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': postBody.length
		}
	}

	var postreq = https.request(options, function(res) {
		res.on('data', function(data) {
			callback(JSON.parse(data));
		});
	});

	postreq.on('error', function(e) {
		console.error(e.message);
	});

	postreq.write(postBody);
	postreq.end();
}
