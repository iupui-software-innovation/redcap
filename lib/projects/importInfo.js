'use strict';

module.exports = function (utilRef) {
  var utils = utilRef;

  return function (params, callback) {
    var body = {
      content: 'project_settings',
      data: JSON.stringify(params.data)
    };

    utils.post (body, callback);
  }
};