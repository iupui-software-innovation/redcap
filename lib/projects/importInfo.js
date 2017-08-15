'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    required: [
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
      content: 'project_settings',
    });

    utils.post (body, callback);
  }
};
