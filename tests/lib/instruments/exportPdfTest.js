'use strict';

const expect = require('chai').expect;
const exportPdf = require('../../../lib/instruments/exportPdf.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportPdf', function() {
	it('should be a function', function() {
		expect(exportPdf).to.be.a('function');
	});
});