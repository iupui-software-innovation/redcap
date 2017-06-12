'use strict';

const expect = require('chai').expect;
const exportInfo = require('../../../lib/projects/exportInfo.js');

describe('projects#exportInfo', function() {
	it('should be a function', function() {
		expect(exportInfo).to.be.a('function');
	});
});
