'use strict';

var post = require('../utils/post.js');

var metadata = {};

metadata.exportInfo = function(params, callback) {
    var body = {
        content: 'metadata',
        format: 'json',
        returnFormat: 'json'
    }

    post(body, callback);
}

module.exports = metadata;
