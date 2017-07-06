'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    required: [],
    optional: []
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: errmsg}, null);

    var body = Object.assign (keys.keys, {
      format: 'json',
      content: 'generateNextRecordName'
    });

    utils.post (body, callback);
  }
};
