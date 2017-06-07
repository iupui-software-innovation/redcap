'use strict';

var post = require('../utils/post.js');


module.exports = function(params, callback) {
    var body = {
        content: 'metadata',
        format: 'json',
        returnFormat: 'json',
        instrument: params.instrument,
        event: params.event,
    }

    post(body, callback);
}
