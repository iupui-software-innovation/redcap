'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

const exportInfo = require('../../../lib/users/export.js');

describe('users#exportInfo', function() {
	it('should be a function', function() {
		expect(exportInfo).to.be.a('function');
	});

	var exportFunc = exportInfo(utils);

	it('should return a function', function() {
		expect(exportFunc).to.be.a('function');
	});

	it('should return project info', function(done) {
		exportFunc({}, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.not.be.null;
			expect(res).to.be.an('array').with.length(5);
			done();
		});
	});
});