'use strict';

const expect = require('chai').expect;
const importMappings = require('../../../lib/instruments/importMappings.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#importMappings', function() {
	it('should be a function', function() {
		expect(importMappings).to.be.a('function');
	});
});