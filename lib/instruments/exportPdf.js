'use strict';

const fs = require ('fs');

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    optional: [
      'record',
      'event',
      'instrument',
			'allRecords',
    ]
  };

  return function (params, callback) {
    callback = callback || params;
    var body = {
      content: 'pdf',
      format: 'json'
    }

    if (typeof params != 'function') {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false)
        return callback (new Error (keys.errmsg));

      body = Object.assign (body, keys.keys);
    }

		utils.post (body, callback);
	}
};
