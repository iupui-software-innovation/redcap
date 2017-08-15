'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [
      'override',
      'data'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    // Pre-stringify data array
    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign (keys.keys, {
      content: 'arm',
      action: 'import',
      format: 'json'
    });

    utils.post (body, callback);
  }
};
