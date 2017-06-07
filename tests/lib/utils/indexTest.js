'use strict';

const expect = require('chai').expect;
const utilExport = require('../../../lib/utils');

const baseConfig = require('../config.json');

describe('utils', function() {
	describe('module.export', function() {
		it('should be a function', function() {
			expect(utilExport).to.be.a('function');
		});
	});

	describe('constructor', function() {
		it('should throw an error if no configuration is given', function() {
			try {
				utilExport();
			}
			catch (err) {
				expect(err).to.equal("No API configuration");
			}
		});

		var util = utilExport(baseConfig);
		it('should return an object', function() {
			expect(util).to.be.an('object');
		});
	});

	describe('utils object', function() {
		var util = utilExport(baseConfig);
		it('should have keys for utility functions', function() {
			var keys = ['post'];
			expect(util).to.have.keys(keys);
		});
	});

	describe('#post', function() {
		it('should be a function', function() {
			var util = utilExport(baseConfig);
			expect(util.post).to.be.a('function');
		});

	});
});
