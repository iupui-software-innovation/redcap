'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;

	return function(params, callback) {
		var body = {
			content: 'project_settings',
			format: 'json',
			data: params.data
		}

		utils.post(body, callback);
	}
}
