'use strict';

var config = require('../lib/config.json');
var redcap = require('../lib/redcap.js')(config.token, config);
var assert = require('assert');

var params = {};

var callback = function(data, err) {
	if (err) done(err);
	else done();
};