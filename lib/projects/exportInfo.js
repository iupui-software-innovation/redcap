'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
		var body = {
			content: 'project',
			format: 'json',
			returnFormat: 'json'
		}

		utils.post(body, callback);
	}
}

