'use strict';

const expect = require('chai').expect;
const redcap_versionModule = require('../../../lib/redcap_version');
const utils = require('../../../lib/utils');

describe('redcap_version', function() {
	it('should be a function', function() {
		expect(redcap_versionModule).to.be.a('function');
	});

	var redcap_version = redcap_versionModule(utils);

	var keys = [
		'export'
	];

	it('should return an object with keys', function() {
		expect(redcap_version).to.be.an('object').that.has.keys(keys);
	});

	describe('#export', function() {
		it('should be a function', function() {
			expect(redcap_version.export).to.be.a('function');
		});
	});
});