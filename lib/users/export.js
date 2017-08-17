'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  return function (callback) {
    var body = {
      content: 'user',
      format: 'json'
    };

    utils.post (body, callback);
  }
};
