'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;
  return function (params, callback) {
    var body = {
      content: 'formEventMapping',
      returnFormat: 'json',
      data: JSON.stringify(params.data)
    };

    utils.post (body, callback);
  }
};