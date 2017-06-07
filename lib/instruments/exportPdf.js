'use strict';

var post = require('../utils/post.js');


module.exports = function(params, callback) {
    var body = {
        content: 'pdf',
        format: 'json',
        returnFormat: 'json',
        instrument: params.instrument,
        event: params.event,
        record: params.record,
        allRecords: params.allRecords
    }

    post(body, callback);
}