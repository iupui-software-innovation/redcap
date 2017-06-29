'use strict';

module.exports = function (token, options) {
  if (token === undefined || token === "") {
    throw "No API token specified";
  }

  if (options === undefined) {
    throw "No options provided";
  }

  if (options.host === undefined) {
    throw "Host undefined (options.host)";
  }

  if (options.path === undefined) {
    throw "Path undefined (options.path)";
  }

  var apiData = {
    token: token,
    host: options.host,
    path: options.path
  };
  var utils = require ('./utils') (apiData);

	return {
		PACKAGE_VERSION: require('../package.json').version,
    arms: require ('./arms') (utils),
    events: require ('./events') (utils),
    users: require ('./users') (utils),
    metadata: require ('./metadata') (utils),
    redcapVersion: require ('./redcapVersion') (utils),
    projects: require ('./projects') (utils),
    fieldNames: require ('./fieldNames') (utils),
    records: require ('./records') (utils),
    reports: require ('./reports') (utils),
    survey: require ('./survey') (utils)
  }
};
