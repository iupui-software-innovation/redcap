'use strict';

const expect = require('chai').expect;
const exportInfo = require('../../../lib/redcap_version/export.js');

describe('redcap_version#exportInfo', function() {
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
		var exportFunc = exportInfo(utils);
		expect(exportFunc).to.be.a('function');
	});

	// Potentially giving errors since it is returning plaintext
	it('should return REDCap version', function(done) {
		var exportFunc = exportInfo(utils);

		exportFunc({}, function(err, res) {
			expect(err).to.be.empty;
			expect(res).to.not.be.empty;
			expect(res).to.be.a('string');
			done();
		});
	});
});