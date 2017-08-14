'use strict';

var https = require ('https');
var querystring = require ('querystring');
const fs = require('fs');

// Ensure that the necessary API information has been provided
function validateApiData (apiData) {
  if (apiData == undefined) {
    throw "No API configuration";
  }
  if (!("token" in apiData) || apiData.token === "") {
    throw "No API token specified";
  }
  if (!("host" in apiData) || apiData.host === "") {
    throw "No host specified";
  }
}

// POST utility

module.exports = function (apiData) {
  validateApiData(apiData);

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

    // Buffers for receiving data in multiple parts, such as files
    var dataBuffers = [];

    var postreq = https.request (options, function (res) {
      // Stuff data chunks into array
      res.on ('data', function (data) {
        dataBuffers.push (data);
      });

      res.on('end', function () {
        // Turn the data chunks into a single buffer
        var data = Buffer.concat(dataBuffers);

        try {
          // If we actually got data try to parse it as JSON
          if (data != '') {
            var ret = JSON.parse (data);
          }
          else {
            var ret = '';
          }
          // We want to treat API errors the same as HTTP errors
          if (typeof ret === 'object' && 'error' in ret) {
    		    return callback (ret, null);
          }
          // Pass back the data that was successfully parsed as a JSON object
          else {
            return callback(null, ret);
          }
        }
        catch(err) {
          // If the JSON parse fails just pass the buffer along
          return callback(null, data);
        }
      });
    });

    // HTTP errors
    postreq.on ('error', function(e) {
      return callback (e, null);
    });

    postreq.write (postBody);
    postreq.end ();
  }
};
