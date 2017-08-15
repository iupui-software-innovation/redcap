'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'records'
    ],

    optional: [
      'arm'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    var body = Object.assign (keys.keys, {
      content: 'record',
      format: 'csv',
      action: 'delete'
    });

    // Convert records array to individual entries
    body.records.forEach (function (record, index) {
      body[`records[${index}]`] = record;
    });

    delete body.records;
    utils.post (body, callback);
  }
}
