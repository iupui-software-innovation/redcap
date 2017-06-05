'use strict';

// Hello I am not a proper unit test yet
// This is just to make sure stuff even works
var redcap = require('../lib/redcap.js');

var params = {};
var callback = function(data) {
	console.log(data);
};

// Change as needed to test whatever util you'd like to test
redcap.users.exportInfo(params, callback);
