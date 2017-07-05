'use strict';

const { StringDecoder } = require ('string_decoder');

module.exports = function (utilRef) {
    const utils = utilRef;

    var keySet = {
        required: [
            'record'
        ],
        optional: []
    };

    return function (params, callback) {
        var keys = utils.keyCheck (params, keySet);

        var body = Object.assign (keys.keys, {
            content: 'surveyQueueLink'
        });

        utils.post (body, function (err, res) {
            if (err && res == null) {
                callback (err, null);
                return;
            }

            const decoder = new StringDecoder ('utf8');

            callback (null, decoder.write (res));
        });
    }
};