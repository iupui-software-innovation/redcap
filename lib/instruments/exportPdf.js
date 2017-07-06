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

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

		var fileName = keys.keys.fileName;

    // Add directory to filename if provided, create file
    if (keys.keys.hasOwnProperty ('directory')) fileName = fileName + keys.keys.directory;
		fs.writeFileSync (fileName + '.pdf', '');

    var body = Object.assign (keys.keys, {
      content: 'pdf',
      format: 'json'
    });

		utils.post (body, function (err, res) {
			if (err && res == null) return callback (err, null);

			fs.appendFileSync (fileName + '.pdf', res);
			callback (null, res);
		});

	}
};
