'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'pdf',
            returnFormat: 'json',
            instrument: params.instrument,
            event: params.event,
            record: params.record,
            allRecords: params.allRecords
        }

        utils.post(body, callback);
    }
}