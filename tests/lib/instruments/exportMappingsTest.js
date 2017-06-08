'use strict';

const expect = require('chai').expect;
const exportMappings = require('../../../lib/instruments/exportMappings.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportMappings', function() {
	it('should be a function', function() {
		expect(exportMappings).to.be.a('function');
	});
});