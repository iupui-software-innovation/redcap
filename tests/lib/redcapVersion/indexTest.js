'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

const redcapVersionModule = require('../../../lib/redcapVersion');

describe('redcapVersion', function() {
	it('should be a function', function() {
		expect(redcapVersionModule).to.be.a('function');
	});

	var redcapVersion = redcapVersionModule(utils);

	var keys = [ 'export' ];

	it('should return an object with keys to methods', function() {
		expect(redcapVersion).to.be.an('object').that.has.keys(keys);
	});

	describe('redcapVersion#export', function() {
		it('should be a function', function() {
			expect(redcapVersion.export).to.be.a('function');
		});
	});
});