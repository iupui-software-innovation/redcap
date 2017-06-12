'use strict';

const expect = require('chai').expect;
const exportLink = require('../../../lib/survey/exportLink.js');

describe('survey#exportLink', function() {
	it('should be a function', function() {
		expect(exportLink).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

	it('should return a function', function() {
		var exportFunc = exportLink(utils);
		expect(exportFunc).to.be.a('function');
	});

	it('should return project info', function(done) {
		var exportFunc = exportLink(utils);

		exportFunc({}, function(err, res) {
			expect(err).to.be.empty;
			expect(res).to.not.be.empty;
			expect(res.project_title).to.equal('REDCap.js (Test)');
			done();
		});
	});
});