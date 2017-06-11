'use strict';

module.exports = function(utilRef) {
	return {
		exportInfo: require('./exportInfo.js')(utilRef),
		importInfo: require('./importInfo.js')(utilRef),
		generateNextRecordName: require('./generateNextRecordName.js')(utilRef),
	}
}


