'use strict';

const fs = require ('fs');

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [
			'fileName'
		],
    optional: [
      'record',
      'event',
      'instrument',
			'allRecords',
			'directory'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);
		var directory = params.directory;
		var fileName = params.fileName;

		fs.writeFileSync (directory + fileName + '.pdf', '');
    if (keys.valid === false) {
      callback ({error: keys.errmsg}, null);
      return;
    }

    var body = Object.assign (keys.keys, {
      content: 'pdf',
      format: 'json'
    });

		utils.post (body, function (err, res) {
			if (err && res == null) {
				callback (err, null);
				return;
			}
			fs.appendFileSync (directory + fileName + '.pdf', res);
			callback (null, res);
		});

	}
};