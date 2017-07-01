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
    optional: []
  };

  return function (params, callback) {
    var body = Object.assign (utils.keyCheck (params, keySet).keys, {
      format: 'json',
      content: 'file',
      action: 'import'
    });

    utils.postFileUpload (body, function (err, res) {
      if (err && res == null) {
        callback (err, null);
        return;
      }
      callback (null, res);
    });
  }
};