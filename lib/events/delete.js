'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'events'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) {
      callback ({ error: keys.errmsg }, null);
      return;
    }

    var body = Object.assign (keys.keys, {
      content: 'event',
      action: 'delete',
    });

    utils.post (body, callback);
  }
}
