'use strict';

const { StringDecoder } = require ('string_decoder');

module.exports = function (utilRef) {
  var utils = utilRef;
  return function (params, callback) {
    var body = {
      content: 'surveyQueueLink',
      returnFormat: 'json',
      record: params.record
    };

    utils.post (body, function (err, res) {
      if (err && res == null) {
        callback (err, null);
        return;
      }

      const decoder = new StringDecoder ('utf8');

      callback (null, decoder.write (res));
    });
  }
};