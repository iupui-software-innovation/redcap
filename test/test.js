'use strict';

// Hello I am not a proper unit test yet
// This is just to make sure stuff even works
var redcap = require('../lib/redcap.js');

var params = {};
var callback = function(data) {
	console.log(data);
};

redcap.users.exportInfo(params, callback);
