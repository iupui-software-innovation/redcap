'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [],
    optional: [
      'arms'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) {
      callback ({error: keys.errmsg}, null);
      return;
    }

    var body = Object.assign (keys.keys, {
      content: 'arm',
      format: 'json'
    });

    body.arms.forEach (function (arm, index) {
      body[`arms[${index}]`] = arm;
    });

    delete body.records;
    utils.post (body, callback);
  }
};