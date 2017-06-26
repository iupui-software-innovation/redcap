'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [],
    optional: [
      'field'
    ]
  };

  return function (params, callback) {
    var body = Object.assign (utils.keyCheck (params, keySet).keys, {
      format: 'json',
      content: 'exportFieldNames'
    });

    utils.post (body, callback);
  }
};