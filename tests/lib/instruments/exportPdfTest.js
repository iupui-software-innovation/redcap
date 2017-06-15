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

	// The PDF will default to the root directory of redcap.js unless changed
	it('should return a PDF file', function(done) {
		var exportFunc = exportPdf(utils);
		var params = {
			instrument: '',
			event: '',
			record: '',
			directory: '',
			fileName: 'test'
		}
		exportFunc(params, function(err, res) {
			expect(err).to.be.null;
			done();
		});
	});
});