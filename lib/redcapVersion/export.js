'use strict';

const { StringDecoder } = require ('string_decoder');

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [],
    optional: []
  };

  return function (params, callback) {

    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) {
      callback ({error: keys.errmsg}, null);
      return;
    }

    var body = Object.assign (keys.keys, {
      content: 'version',
      format: 'json'
    });

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