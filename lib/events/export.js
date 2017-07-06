'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    required: [],

    optional: [
      'arms'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      format: 'json',
      content: 'event'
    });

    // Convert array to format the API method expects
    if (body.hasOwnProperty ('arms')) {
      var armsString = "";
      body.arms.forEach (function (arm) {
        armsString += "," + arm;
      });
      body.arms = armsString;
    }

    utils.post (body, callback);
  }
};
