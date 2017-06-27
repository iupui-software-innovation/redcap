'use strict';

module.exports = function (params, keySets) {
  var body = {
    valid: true,
    errmsg: '',
    keys: {}
  };

  var key;

  if (keySets == undefined || (keySets.required == undefined && keySets.optional == undefined)) {
    body.valid = false;
    body.errmsg = 'No keys defined';
    return body;
  }

  if (keySets.hasOwnProperty ('required')) {
    for (key of keySets.required) {
      if (!params.hasOwnProperty (key)) {
        body.valid = false;
        body.errmsg = `Required parameter missing: ${key}`;
        return body;
      }
      else {
        body.keys[key] = params[key];
      }
    }
  }

  if (keySets.hasOwnProperty ('optional')) {
    for (key of keySets.optional) {
      if (params.hasOwnProperty (key)) {
        body.keys[key] = params[key];
      }
    }
  }

  return body;
};