'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  var keySet = {
    required: [
      'data'
    ],
    optional: []

    return function (params, callback) {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) {
        callback (keys.errmsg, null);
        return;
      }

      var body = Object.assign (keys.keys, {
        content: 'project_settings',
        data: JSON.stringify(params.data)
      });

      utils.post (body, callback);
    }
  };
