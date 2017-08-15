'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'events'
    ],
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    var body = Object.assign (keys.keys, {
      content: 'event',
      action: 'delete',
    });

    // Convert the events array into individual entries
    body.events.forEach (function (event, index) {
      body[`events[${index}]`] = event;
    });
    delete body.events;

    utils.post (body, callback);
  }
}
