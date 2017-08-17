'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    optional: [
      'arms'
    ]
  };

  return function (params, callback) {
    callback = callback || params;
    
    var body = {
      format: 'json',
      content: 'event'
    };

    if (typeof params != 'function') {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) 
        return callback (new Error (keys.errmsg));

      body = Object.assign (body, keys.keys);
    }

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
