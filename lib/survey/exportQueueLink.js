'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'surveyQueueLink',
            returnFormat: 'json',
            record: params.record
        }

        utils.post(body, callback);
    }
}