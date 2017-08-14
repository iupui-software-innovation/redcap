'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  var keySet = {
    optional: [
      'fields',
      'forms'
    ]
  };

  return function (params, callback) {
    callback = callback || params;
    var body = {
      content: 'metadata',
      format: 'json'
    }

    if (typeof params != 'function') {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) 
        return callback ({error: keys.errmsg}, null);

      body = Object.assign (body, keys.keys);
    }

    // Replace arrays with individual entries
    if (body.hasOwnProperty ('fields')) {
      body.fields.forEach (function (field, index) {
        body[`fields[${index}]`] = field;
      });

      delete body.fields;
    }

    if (body.hasOwnProperty ('forms')) {
      body.forms.forEach (function (form, index) {
        body[`forms[${index}]`] = form;
      });

      delete body.forms;
    }

    utils.post (body, callback);
  }
};
