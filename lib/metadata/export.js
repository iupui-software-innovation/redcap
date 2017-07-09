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
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) return callback ({error: keys.errmsg}, null);

    var body = Object.assign (keys.keys, {
      content: 'metadata',
      format: 'json'
    });

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
