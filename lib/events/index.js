'use strict';

module.exports = function (utilRef) {
  return {
    exportEvents: require ('./export.js') (utilRef),
    importEvents: require ('./import.js') (utilRef),
    deleteEvents: require ('./delete.js') (utilRef)
  }
}
