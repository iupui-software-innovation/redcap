'use strict';

const fs = require ('fs');

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'record',
      'field',
      'event',
      'file',
      'directory'
    ],
    optional: [
      'repeat_instance'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign ({
      format: 'json',
      content: 'file',
      action: 'import',
      repeat_instance: 1
    }, keys.keys);

    utils.postFileUpload (body, callback);
  }
};
