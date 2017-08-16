'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    optional: [
      'type',
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
    ],
  }

  return function (params, callback) {
    callback = callback || params;
    var body = {
      content: 'record',
      format: 'json',
      type: 'flat'
    }

    if (typeof params != 'function') {
      var keys = utils.keyCheck(params, keySet);

      if (keys.valid === false) 
        return callback (new Error (keys.errmsg));

      body = Object.assign (body, keys.keys);
    }

    // Convert array to the format expected by the API method
    if (body.hasOwnProperty ('records')) {
      var recordString = "";
      body.records.forEach (function (record) {
        recordString += "," + record;
      });
      body.records = recordString;
    }

    utils.post (body, callback);
  }
}
