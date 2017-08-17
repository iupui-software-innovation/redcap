'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  return function (callback) {

    var body = {
      format: 'json',
      content: 'generateNextRecordName'
    };

    utils.post (body, callback);
  }
};
