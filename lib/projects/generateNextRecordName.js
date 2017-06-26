'use strict';

module.exports = function(utilRef) {
  var utils = utilRef;

  return function(params, callback) {
    var body = {
      content: 'generateNextRecordName'
    };

    utils.post(body, callback);
  }
};