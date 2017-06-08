'use strict';

const expect = require('chai').expect;
const metadataModule = require('../../../lib/metadata');
const utils = require('../../../lib/utils');

context('metadata', function() {
	describe('module.export', function() {
		it('should be a function', function() {
			expect(metadataModule).to.be.a('function');
		});

		describe('constructor', function() {
			it('should return an object', function() {
				expect(metadataModule(utils)).to.be.an('object');
			});
		});

		describe('#export', function() {
			it('should be a function', function() {
				expect(metadataModule(utils).export).to.be.a('function');
			});
		});
		describe('#import', function() {
			it('should be a function', function() {
				expect(metadataModule(utils).import).to.be.a('function');
			});
		});
	});
});
