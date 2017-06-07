'use strict';

var post = require('../utils/post.js');


module.exports = function(params, callback) {
    var body = {
        content: 'surveyQueueLink',
        returnFormat: 'json',
        record: params.record
    }

    post(body, callback);
}
