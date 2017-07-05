'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [
      'data'
    ],
    optional: []
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) {
      callback ({error: keys.errmsg}, null);
      return;
    }

    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign (keys.keys, {
      content: 'user',
      format: 'json'
    });

    utils.post (body, callback);
  }
};