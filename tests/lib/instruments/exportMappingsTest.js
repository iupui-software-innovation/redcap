'use strict';

const expect = require('chai').expect;
const exportMappings = require('../../../lib/instruments/exportMappings.js');

describe('instruments#exportMappings', function() {
	it('should be a function', function() {
		expect(exportMappings).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

	it('should return a function', function() {
		var exportFunc = exportMappings(utils);
		expect(exportFunc).to.be.a('function');
	});

	it('should return an array of mappings', function(done) {
		var exportFunc = exportMappings(utils);
		exportFunc({}, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.not.be.null;
			expect(res).to.be.an('array');
			done();
		});
	});
});