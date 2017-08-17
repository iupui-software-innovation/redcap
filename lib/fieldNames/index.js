'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  return {
    export: require ('./exportList.js') (utils)
  }
};
