'use strict';

var post = require('../utils/post.js');


module.exports = function(params, callback) {
    var body = {
        content: 'surveyLink',
        returnFormat: 'json',
        instrument: params.instrument,
        event: params.event,
        record: params.record,
        repeat_instance: params.repeat_instance
    }

    post(body, callback);
}