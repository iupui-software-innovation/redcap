'use strict';

const expect = require('chai').expect;
const exportInfo = require('../../../lib/redcap_version/export.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#export', function() {
	it('should be a function', function() {
		expect(exportInfo).to.be.a('function');
	});
});
