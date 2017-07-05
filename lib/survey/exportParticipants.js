'use strict';

module.exports = function (utilRef) {
    const utils = utilRef;

    var keySet = {
        required: [
            'instrument',
            'event'
        ],
        optional: []
    };

    return function (params, callback) {
        var keys = utils.keyCheck (params, keySet);

        var body = Object.assign (keys.keys, {
            format: 'json',
            content: 'participantList'
        });

        utils.post (body, callback);
    }
};