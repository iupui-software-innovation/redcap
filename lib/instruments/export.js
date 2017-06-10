'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'imstrument',
            returnFormat: 'json'
        }

        utils.post(body, callback);
    }
}