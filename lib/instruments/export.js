'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'imstrument',
        }

        utils.post(body, callback);
    }
}