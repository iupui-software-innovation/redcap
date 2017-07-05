'use strict';

module.exports = function (utilRef) {

  const utils = utilRef;

  var keySet = {
    required: [
      'data'
    ],
    optional: []

    var utils = utilRef;
    return function (params, callback) {
      var keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) {
        callback (keys.errmsg, null);
        return;
      }

      var body = Object.assign (keys.keys, {
        content: 'formEventMapping',
        returnFormat: 'json',
        data: JSON.stringify(params.data)
      });

      utils.post (body, callback);
    }
  };
