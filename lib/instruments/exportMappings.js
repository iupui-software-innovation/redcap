'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'formEventMapping',
            returnFormat: 'json',
            arms: params.arms
        }

        utils.post(body, callback);
    }
}
