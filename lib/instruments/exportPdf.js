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

        fs.writeFileSync(directory + fileName + '.pdf', '');

        utils.post(body, function(err, res) {
            if (err && res == null) {
                callback(err, null);
                return;
            }
            fs.appendFileSync(directory + fileName + '.pdf', res);
            callback(null, res);
        });       
        
    }
}