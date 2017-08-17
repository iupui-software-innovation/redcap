'use strict';

module.exports = function (utilRef) {
  return {
    export: require ('./export.js') (utilRef),
    import: require ('./import.js') (utilRef),
    delete: require ('./delete.js') (utilRef)
  }
}
