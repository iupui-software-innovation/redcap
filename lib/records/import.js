'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'data'
    ],

    optional: [
      'type',
      'dateFormat',
      'returnContent',
      'overwriteBehavior'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    // Pre-stringify data array
    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign ({
      content: 'record',
      format: 'json',
      overwriteBehavior: 'normal',
      type: 'flat'
    }, keys.keys);

    utils.post (body, callback);
  }
}
