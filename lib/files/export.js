'use strict';

const { StringDecoder } = require('string_decoder');
const fs = require('fs');

module.exports = function(utilRef) {
	const utils = utilRef;

	const keySet = {
		required: [
            'record',
            'field',
            'event',
            'repeat_instance'
        ],
		optional: [
			'directory'
		]
	};

	return function(params, callback) {
		var keys = utils.keyCheck(params, keySet);
        var directory = params.directory;

        fs.writeFileSync(directory + 'test.txt', '');
		if (keys.valid === false) {
			callback({error: keys.errmsg}, null);
			return;
		}

		var body = Object.assign(keys.keys, {
			content: 'file',
			format: 'json',
			action: 'export'
		});

        utils.post(body, function(err, res) {
            if (err && res == null) {
                callback(err, null);
                return;
            }
            fs.appendFileSync(directory + 'test.txt', '', res);
            callback(null, res);
        });      
	}
}