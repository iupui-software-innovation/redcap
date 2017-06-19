'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'instrument',
        }

        utils.post(body, callback);
    }
}