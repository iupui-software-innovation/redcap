'use strict';

const fs = require('fs');

module.exports = function(utilRef) {
	var utils = utilRef;
	return function(params, callback) {
        var body = {
            content: 'pdf',
            returnFormat: 'json',
            instrument: params.instrument,
            event: params.event,
            record: params.record,
            allRecords: params.allRecords
        }
        var directory = params.directory;
        var fileName = params.fileName;

        utils.post(body, function(err, res) {
            if (err && res == null) {
                callback(err, null);
                return;
            }

            fs.writeFile(directory + fileName + '.pdf', res, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                return;
            });

            callback(null, res);
        });       
    }
}