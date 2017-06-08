'use strict';

const expect = require('chai').expect;
const exportReturnCode = require('../../../lib/survey/exportReturnCode.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportReturnCode', function() {
	it('should be a function', function() {
		expect(exportReturnCode).to.be.a('function');
	});
});
