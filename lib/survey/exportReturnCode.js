'use strict';

const { StringDecoder } = require('string_decoder');

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'surveyReturnCode',
            returnFormat: 'json',
            instrument: params.instrument,
            event: params.event,
            record: params.record,
            repeat_instance: params.repeat_instance
        }

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