'use strict';

var post = require('../utils/post.js');

var users = {};

users.exportInfo = function(params, callback) {
    var body = {
        content: 'user',
        format: 'json',
        returnFormat: 'json'
    }

    post(body, callback);
}

module.exports = users;
