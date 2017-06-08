'use strict';

const expect = require('chai').expect;
const importInfo = require('../../../lib/users/import.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#importInfo', function() {
	it('should be a function', function() {
		expect(importInfo).to.be.a('function');
	});
});