
'use strict';

// Hello I am not a proper unit test yet
// This is just to make sure stuff even works
var config = require('../lib/config.json');
var redcap = require('../lib/redcap.js')(config.token, config);
var assert = require('assert');

var params = {};

var callback = function(data, err) {
  console.log(data);

};

describe('Users test', function(){
	it('Should output all users', function() {
		redcap.users.export(params, callback);
	});

	it('Should create a new user', function() {
		redcap.users.import(params, callback);
	});
});