'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'record',
      'field',
      'event',
      'repeat_instance'
    ],
    optional: []
  };

  return function (params, callback) {
    var body = Object.assign (utils.keyCheck (params, keySet).keys, {
      format: 'json',
      content: 'file',
      action: 'delete'
    });

    utils.post (body, callback);
  }
};