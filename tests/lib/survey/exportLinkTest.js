'use strict';

const expect = require('chai').expect;
const exportLink = require('../../../lib/survey/exportLink.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportLink', function() {
	it('should be a function', function() {
		expect(exportLink).to.be.a('function');
	});
});