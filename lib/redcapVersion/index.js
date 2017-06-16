'use strict';

module.exports = function(utilRef) {
	const utils = utilRef;

	return {
<<<<<<< HEAD:lib/redcapVersion/index.js
		export: require('./export.js')(utils)
=======
		exportInfo: require('./exportInfo.js')(utilRef),
		importInfo: require('./importInfo.js')(utilRef),
		generateNextRecordName: require('./generateNextRecordName.js')(utilRef),
>>>>>>> master:lib/projects/index.js
	}
}