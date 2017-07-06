'use strict';

const fs = require ('fs');

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'record',
      'field',
      'event',
      'repeat_instance',
      'file',
      'directory'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      format: 'json',
      content: 'file',
      action: 'import'
    });

    utils.postFileUpload (body, function (err, res) {
      if (err && res == null) return callback (err, null);

      callback (null, res);
    });
  }
};
