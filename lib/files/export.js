'use strict';

const { StringDecoder } = require('string_decoder');

module.exports = function(utilRef) {
	const utils = utilRef;

	const keySet = {
		required: [
            'record',
            'field',
            'event',
            'repeat_instance'
        ],
		optional: []
	};

	return function(params, callback) {
		var body = Object.assign(utils.keyCheck(params, keySet).keys, {
			format: 'json',
			content: 'file',
            action: 'export'
		});

		utils.post(body, function(err, res) {
			if (err && res == null) {
				callback(err, null);
				return;
			}

			const decoder = new StringDecoder('utf8');

			callback(null, decoder.write(res));
		});
	}
}