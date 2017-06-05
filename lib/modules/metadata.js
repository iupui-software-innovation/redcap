'use strict';

var post = require('../utils/post.js');

var metadata = {};

metadata.exportInfo = function(params, callback) {
    var body = {
        content: 'metadata',
        format: 'json',
        returnFormat: 'json',
        'fields[0]': params.field,
        'forms[0]': params.form
    }

    post(body, callback);
}

module.exports = metadata;
