'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    optional: [
      'arms'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      content: 'formEventMapping',
      format: 'json'
    });

    // Convert array to individual entries
    body.arms.forEach (function (arm, index) {
      body[`arms[${index}]`] = arm;
    });

    delete body.arms;
    utils.post (body, callback);
  }
};
