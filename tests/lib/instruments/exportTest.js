'use strict';

const expect = require('chai').expect;
const exportInfo = require('../../../lib/instruments/export.js');

describe('instruments#exportInfo', function() {
	it('should be a function', function() {
		expect(exportInfo).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

	it('should return a function', function() {
		var exportInfoFunc = exportInfo(utils);
		expect(exportInfoFunc).to.be.a('function');
	});

	it('should return project info', function(done) {
		var exportInfoFunc = exportInfo(utils);

		exportInfoFunc({}, function(err, res) {
			expect(err).to.be.empty;
			expect(res).to.not.be.empty;
			expect(res).to.be.an('array').of.length(0);
			done();
		});
	});
});