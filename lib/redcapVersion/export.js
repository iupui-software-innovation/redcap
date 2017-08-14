'use strict';

const { StringDecoder } = require ('string_decoder');

module.exports = function (utilRef) {
  var utils = utilRef;

  return function (callback) {
    var body = {
      content: 'version',
      format: 'json'
    };

    utils.post (body, function (err, res) {
      if (err) 
        return callback (err);

      const decoder = new StringDecoder ('utf8');
      callback (null, decoder.write (res));
    });
  }
};
