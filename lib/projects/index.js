'use strict';

module.exports = function (utilRef) {
  return {
    export: require ('./exportInfo.js') (utilRef),
    import: require ('./importInfo.js') (utilRef),
    generateNextRecordName: require ('./generateNextRecordName.js') (utilRef)
  }
};
