'use strict';

const expect = require('chai').expect;
const exportPdf = require('../../../lib/instruments/exportPdf.js');

describe('instruments#exportPdf', function() {
	it('should be a function', function() {
		expect(exportPdf).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

	it('should return a function', function() {
		var exportFunc = exportPdf(utils);
		expect(exportFunc).to.be.a('function');
	});

	it('should return project info', function(done) {
		var exportFunc = exportPdf(utils);

		exportFunc({}, function(err, res) {
			expect(err).to.be.empty;
			expect(res).to.not.be.empty;
			// TODO Add more tests
			done();
		});
	});
});