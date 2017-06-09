'use strict';

var https = require('https');
var querystring = require('querystring');

module.exports = function(apiData) {
	if (apiData == undefined) {
		throw "No API configuration";
	}
	if (!("host" in apiData) || apiData.host === "") {
		throw "No host specified";
	}
	if (!("token" in apiData) || apiData.token === "") {
		throw "No API token specified";
	}

	var apiData = apiData;
	return function(postData, callback) {
		postData.token = apiData.token;

		var postBody = querystring.stringify(postData);

		var options = {
			hostname: apiData.host,
			path: apiData.path,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': postBody.length
			}
		}

		var postreq = https.request(options, function(res) {
			res.on('data', function(data) {
				try {
					callback({}, JSON.parse(data));
				}
				catch(err) {
					callback(err, {});
				}
			});
		});

		postreq.on('error', function(e) {
			callback(e, {});
		});

		postreq.write(postBody);
		postreq.end();
	}
}