'use strict';

module.exports = function (utilRef) {
    const utils = utilRef;

    var keySet = {
        required: [
            'data'
        ],
        optional: []
    };

    return function (params, callback) {
        var keys = utils.keyCheck (params, keySet);

        var body = Object.assign (keys.keys, {
            content: 'project_settings'
        });

        utils.post (body, callback);
    }
};
