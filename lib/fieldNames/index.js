'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  return {
    exportList: require ('./exportList.js') (utils)
  }
};