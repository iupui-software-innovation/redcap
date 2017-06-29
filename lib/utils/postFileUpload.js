'use strict';

var request = require('request');
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

    var postBody = querystring.stringify (postData);
    var options = {
      uri: 'https://' + apiData.host + apiData.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postBody.length
      }
    };

    var dataBuffers = [];

    var postreq = request
      .post(options)
      .on ('data', function (data) {
        dataBuffers.push (data);
      })

      .on('end', function () {
        var data = Buffer.concat(dataBuffers);

        try {
          var ret = JSON.parse (data);
          // We want to treat API errors the same as HTTP errors
          if (typeof ret === 'object' && 'error' in ret) {
            callback (ret, null);
          }
          else {
            callback(null, ret);
          }
        }
        catch (err) {
          callback(err, data);
        }
      });
    var form = postreq.form();
    form.append('file', fs.createReadStream('test3.txt'));

    postreq.on ('error', function(e) {
      callback (e, null);
    });

    postreq.write (postBody);
    postreq.end ();
  }
};