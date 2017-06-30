'use strict';

module.exports = function (utilRef) {
  return {
    exportRecords: require ('./export.js') (utilRef),
    importRecords: require ('./import.js') (utilRef),
    deleteRecords: require ('./delete.js') (utilRef)
  }
}
