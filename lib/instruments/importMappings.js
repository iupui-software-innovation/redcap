'use strict';

var post = require('../utils/post.js');


module.exports = function(params, callback) {
    var body = {
        content: 'formEventMapping',
        format: 'json',
        returnFormat: 'json',
        data: params.data
    }

    post(body, callback);
}