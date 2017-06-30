'use strict';

var https = require ('https');
var querystring = require ('querystring');
const fs = require('fs');

module.exports = function (apiData) {
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
  return function (postData, callback) {
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

    var dataBuffers = [];

    var postreq = https.request (options, function (res) {
      res.on ('data', function (data) {
        dataBuffers.push (data);
      });

      res.on('end', function () {
        var data = Buffer.concat(dataBuffers);

        try {
		      // Per the redcap documentation, the filename is saved in the request
	  	    // header under content type. This parses the header for the name.
		      var splitHeader = res.headers['content-type'].split("\"");
          if (typeof splitHeader[1] !== 'undefined') {
            fs.writeFileSync(splitHeader[1], '');
            fs.appendFileSync(splitHeader[1], data);
          }
          if (data != '') {
            var ret = JSON.parse (data);
          }
          else {
            var ret = '';
          }
          // We want to treat API errors the same as HTTP errors
          if (typeof ret === 'object' && 'error' in ret) {
    		    callback (ret, null);
          }
          else {
            callback(null, ret);
          }
        }
        catch(err) {
          callback(err, data);
        }
      });
    });

    postreq.on('error', function(e) {
      callback(e, null);
    });

    postreq.write(postBody);
    postreq.end();
  }
}