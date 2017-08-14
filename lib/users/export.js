'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  return function (callback) {
    var body = Object.assign (keys.keys, {
      content: 'user',
      format: 'json'
    });

    utils.post (body, callback);
  }
};
