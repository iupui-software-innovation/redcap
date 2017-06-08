'use strict';

const expect = require('chai').expect;
const exportInfo = require('../../../lib/users/export.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportInfo', function() {
	it('should be a function', function() {
		expect(exportInfo).to.be.a('function');
	});
});
