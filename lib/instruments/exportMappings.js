'use strict';

var post = require('../utils/post.js');


module.exports = function(params, callback) {
    var body = {
        content: 'formEventMapping',
        format: 'json',
        returnFormat: 'json',
        arms: params.arms
    }

    post(body, callback);
}
