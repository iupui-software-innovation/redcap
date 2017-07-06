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
    body.fields.forEach (function (field, index) {
      body[`fields[${index}]`] = field;
    });

    body.forms.forEach (function (form, index) {
      body[`forms[${index}]`] = form;
    });

    delete body.forms;
    delete body.fields;
    utils.post (body, callback);
  }
};
