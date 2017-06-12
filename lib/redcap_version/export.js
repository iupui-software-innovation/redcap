'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
		var body = {
			content: 'version',
			returnFormat: 'json'
		}

		utils.post(body, callback);
	}
}