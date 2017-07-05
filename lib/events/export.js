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

    var body = Object.assign (keys.keys, {
      format: 'json',
      content: 'event'
    });

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
