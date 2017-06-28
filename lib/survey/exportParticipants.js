'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;
  return function (params, callback) {
    var body = {
      content: 'participantList',
      returnFormat: 'json',
      instrument: params.instrument,
      event: params.event
    };

    utils.post (body, callback);
  }
};