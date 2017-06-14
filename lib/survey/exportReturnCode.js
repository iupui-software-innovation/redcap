'use strict';

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

        utils.postPlaintext(body, callback);
    }
}