'use strict';

module.exports = function (utilRef) {
  return {
    export: require ('./export.js') (utilRef),
    exportMappings: require ('./exportMappings.js') (utilRef),
    importMappings: require ('./importMappings.js') (utilRef),
    exportPdf: require ('./exportPdf.js') (utilRef)
  }
};