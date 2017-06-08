'use strict';

const expect = require('chai').expect;
const exportQueueLink = require('../../../lib/survey/exportQueueLink.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportQueueLink', function() {
	it('should be a function', function() {
		expect(exportQueueLink).to.be.a('function');
	});
});
