'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    required: [
      'override',
      'data'
    ],
    
    optional: []
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({ error: keys.errmsg }, null);

    // Need to pre-stringify data array
    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign (keys.keys, {
      content: 'event',
      action: 'import',
      format: 'json'
    });

    utils.post (body, callback);
  }
};
