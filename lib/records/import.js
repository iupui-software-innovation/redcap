'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'type',
      'data'
    ],

    optional: [
      'dateFormat',
      'returnContent',
      'overwriteBehavior'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback ({error: keys.errmsg}, null);

    // Pre-stringify data array
    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign ({
      content: 'record',
      format: 'json',
      overwriteBehavior: 'normal'
    }, keys.keys);

    utils.post (body, callback);
  }
}
