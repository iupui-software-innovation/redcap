'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'metadata',
            format: 'json',
            returnFormat: 'json',
            data: params.data
        }

        utils.post(body, callback);
    }
}
