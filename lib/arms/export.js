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
    callback = callback || params;

    var body = {
      content: 'arm',
      format: 'json'
    };

    if (typeof params != 'function') {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) 
        return callback ({error: keys.errmsg}, null);

      body = Object.assign (body, keys.keys);
    }

    // Convert arms array to individual entries
    if (body.hasOwnProperty ('arms')) {
      body.arms.forEach (function (arm, index) {
        body[`arms[${index}]`] = arm;
      });
      
      delete body.arms;
    }

    utils.post (body, callback);
  }
};
