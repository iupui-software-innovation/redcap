'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'type',
      'overwriteBehavior',
      'data'
    ],

    optional: [
      'dateFormat',
      'returnContent',
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    // Pre-stringify data array
    keys.keys.data = JSON.stringify(keys.keys.data);

    var body = Object.assign (keys.keys, {
      content: 'record',
      format: 'json',
    });

    utils.post (body, callback);
  }
}
