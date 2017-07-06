'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [],
    optional: [
      'field'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      format: 'json',
      content: 'exportFieldNames'
    });

    utils.post (body, callback);
  }
};
