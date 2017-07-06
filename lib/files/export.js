'use strict';

const { StringDecoder } = require ('string_decoder');
const fs = require ('fs');

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'record',
      'field',
      'event',
      'repeat_instance'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      content: 'file',
      format: 'json',
      action: 'export'
    });

    utils.post (body, function (err, res) {
      if  (err && res == null) return callback (err, null);

      callback (null, res);
    });
  }
};
