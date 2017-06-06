'use strict';

// Hello I am not a proper unit test yet
// This is just to make sure stuff even works
var config = require('../lib/config.json');
var redcap = require('../lib/redcap.js')(config.token, config);

var params = {};
var callback = function(data) {
	console.log(data);
};

redcap.projects.exportInfo(params, callback);
