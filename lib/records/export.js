'use strict';

module.exports = function(utilRef) {
	const utils = utilRef;

	const requiredKeys = [
		'type'
	];

	const optionalKeys = [
		'records',
		'fields',
		'forms',
		'events',
		'rawOrLabel',
		'rawOrLabelHeaders',
		'exportCheckboxLabel',
		'exportSurveyFields',
		'exportDataAccessGroups',
		'filterLogic'
	];

	return function(params, callback) {
		var key;
		var body = {
			content: 'record',
			format: 'json'
		}

		for (key of requiredKeys) {
			if (!params.hasOwnProperty(key)) {
				callback({error: `Required parameter missing: ${key}`}, {});
				return;
			}
			else {
				body[key] = params[key];
			}
		}

		for (key of optionalKeys) {
			if (params.hasOwnProperty(key)) {
				body[key] = params[key];
			}
		}

		utils.post(body, callback);
	}
}
