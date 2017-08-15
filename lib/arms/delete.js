'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [
      'arms'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    var body = Object.assign (keys.keys, {
      content: 'arm',
      action: 'delete'
    });

    // Convert arms array to individual entries
    body.arms.forEach (function (arm, index) {
      body[`arms[${index}]`] = arm;
    });

    delete body.records;
    utils.post (body, callback);
  }
};
