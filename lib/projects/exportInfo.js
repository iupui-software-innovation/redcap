'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  return function (callback) {
    var body = {
      content: 'project'
    };

    utils.post (body, callback);
  }
};
