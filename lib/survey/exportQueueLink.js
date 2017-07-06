'use strict';

const { StringDecoder } = require ('string_decoder');

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    required: [
      'record'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      content: 'surveyQueueLink'
    });

    utils.post (body, function (err, res) {
      if (err && res == null) return callback (err, null);

      const decoder = new StringDecoder ('utf8');
      callback (null, decoder.write (res));
    });
  }
};
