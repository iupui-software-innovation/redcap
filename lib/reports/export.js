'use strict';

module.exports = function(utilRef) {
  var utils = utilRef;

  var keySet = {
    required: [
      'report_id'
    ],
    optional: [
      'rawOrLabel',
      'rawOrLabelHeaders',
      'exportCheckboxLabel'
    ]
  };

  return function(params, callback) {
    var keys = utils.keyCheck(params, keySet);

    if (keys.valid === false) {
      callback({error: keys.errmsg}, null);
      return;
    }

    var body = Object.assign(keys.keys, {
      content: 'report',
      format: 'json'
    });

    utils.post(body, callback);
  }
};
