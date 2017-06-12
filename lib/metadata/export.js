'use strict';

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'metadata',
            returnFormat: 'json',
            fields: params.field,
            forms: params.form
        }

        utils.post(body, callback);
    }
}