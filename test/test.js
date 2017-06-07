
'use strict';

// Hello I am not a proper unit test yet
// This is just to make sure stuff even works
var config = require('../lib/config.json');
var redcap = require('../lib/redcap.js')(config.token, config);
var assert = require('assert');

var params = {};

var callback = function(data, err) {
	if (err) done(err);
	else done();
};

describe('Users test', function(){
	it('Should output all users', function() {
		redcap.users.export(params, callback);
	});
});