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
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      content: 'pdf',
      format: 'json'
    });

		utils.post (body, callback);
	}
};
