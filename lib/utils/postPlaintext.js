'use strict';

var https = require('https');
var querystring = require('querystring');

module.exports = function(apiData) {
	if (apiData == undefined) {
		throw "No API configuration";
	}
	if (!("token" in apiData) || apiData.token === "") {
		throw "No API token specified";
	}
	if (!("host" in apiData) || apiData.host === "") {
		throw "No host specified";
	}
	

	var apiData = apiData;
	return function(postData, callback) {
		postData.token = apiData.token;

		postData.format = 'json';

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
					var ret = JSON.parse('{ "data": "' + data + '" }');
					// We want to treat API errors the same as HTTP errors
					if (typeof ret === 'object' && 'error' in ret) {
						callback(ret, {});
					}
					else {
						callback({}, ret);
					}
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