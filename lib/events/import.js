'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    required: [
      'data'
    ],
    optional: [
      'override'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    // Need to pre-stringify data array
    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign ({
      content: 'event',
      action: 'import',
      format: 'json',
      override: 0
    }, keys.keys
    );

    utils.post (body, callback);
  }
};
