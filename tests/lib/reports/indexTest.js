'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

const reportModule = require('../../../lib/reports');

describe('reports', function() {
	it('should be a function', function() {
		expect(reportModule).to.be.a('function');
	});

	var reports = reportModule(utils);

	var keys = [ 'exportReports' ];

	it('should return an object with keys to methods', function() {
		expect(reports).to.be.an('object').that.has.keys(keys);
	});

	describe('reports#exportReports', function() {
		it('should be a function', function() {
			expect(reports.exportReports).to.be.a('function');
		});
	});
});
