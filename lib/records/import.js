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

    if (keys.valid === false) {
      callback ({error: keys.errmsg}, null);
      return;
    }

    var body = Object.assign (keys.keys, {
      content: 'record',
      format: 'json',
      data: JSON.stringify(keys.keys.data)
    });

    utils.post (body, callback);
  }
}
