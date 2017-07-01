'use strict';

function checkIsArray (sets, property) {
  if (!Array.isArray (sets[property])) {
    return {
      valid: false,
      errmsg: `Expected ${property} to be an array`
    }
  }
  else {
    return {
      valid: true
    }
  }
}

// Key Check utility
// Expects params to contain either a 'required' or 'optional' property, or both
// Each should be an array of property names
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

  // Ensure every required key exists
  if (keySets.hasOwnProperty ('required')) {
    var arrayCheck = checkIsArray (keySets, 'required');
    if (arrayCheck.valid == false) {
      return arrayCheck;
    }

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

  // Ensure any present optional property exists
  if (keySets.hasOwnProperty ('optional')) {
    var arrayCheck = checkIsArray (keySets, 'optional');
    if (arrayCheck.valid == false) {
      return arrayCheck;
    }

    for (key of keySets.optional) {
      if (params.hasOwnProperty (key)) {
        body.keys[key] = params[key];
      }
    }
  }

  return body;
};
