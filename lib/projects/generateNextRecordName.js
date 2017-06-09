'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;

	return function(params, callback) {
		var body = {
			content: 'generateNextRecordName',
			format: 'json'
		}

		utils.post(body, callback);
	}
}
