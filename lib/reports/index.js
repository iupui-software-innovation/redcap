'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  return {
    export: require ('./export.js') (utils)
  }
};
