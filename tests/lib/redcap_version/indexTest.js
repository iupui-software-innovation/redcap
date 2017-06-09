'use strict';

const expect = require('chai').expect;
const redcapVersionModule = require('../../../lib/redcap_version');
const utils = require('../../../lib/utils');

context('redcap_version', function() {
	describe('module.export', function() {
		it('should be a function', function() {
			expect(redcapVersionModule).to.be.a('function');
		});

		describe('constructor', function() {
			it('should return an object', function() {
				expect(redcapVersionModule(utils)).to.be.an('object');
			});
		});

		describe('#export', function() {
			it('should be a function', function() {
				expect(redcapVersionModule(utils).export).to.be.a('function');
			});
		});
	});
});
