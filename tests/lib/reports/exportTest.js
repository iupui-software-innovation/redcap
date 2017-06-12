'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

const exportModule = require('../../../lib/reports/export.js');

describe('reports#exportReports', function() {
	it('should be a function', function() {
		expect(exportModule).to.be.a('function');
	});
});
