'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
		var body = {
			content: 'version',
		}

		utils.post(body, callback);
	}
}