'use strict';

module.exports = function(utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [],
    optional: [
      'fields',
      'forms'
    ]
  };

  return function(params, callback) {
    var keys = utils.keyCheck(params, keySet);

    if (keys.valid === false) {
      callback({error: keys.errmsg}, null);
      return;
    }

    var body = Object.assign(keys.keys, {
      content: 'metadata',
      format: 'json'
    });

    utils.post(body, callback);
  }
};