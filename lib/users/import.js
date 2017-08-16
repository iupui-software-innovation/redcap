'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [
      'data'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    // Pre stringify array
    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign (keys.keys, {
      content: 'user',
      format: 'json'
    });

    utils.post (body, callback);
  }
};
