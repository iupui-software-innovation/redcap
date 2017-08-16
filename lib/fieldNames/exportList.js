'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    optional: [
      'field'
    ]
  };

  return function (params, callback) {
    callback = callback || params;
    var body = {
      format: 'json',
      content: 'exportFieldNames'
    };

    if (typeof params != 'function') {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) 
        return callback ({error: keys.errmsg}, null);

      body = Object.assign (body, keys.keys);
    }

    utils.post (body, callback);
  }
};
