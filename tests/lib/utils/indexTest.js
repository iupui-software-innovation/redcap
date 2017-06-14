'use strict';

const expect = require('chai').expect;
const utilExport = require('../../../lib/utils')

describe('utils', function() {
	describe('module.export', function() {
		it('should be a function', function() {
			expect(utilExport).to.be.a('function');
		});

		it('should return an object with keys to utility functions', function() {
			var config = {
				host: "test",
				path: "test",
				token: "test"
			}
			var utils = utilExport(config);

			expect(utils).to.be.an('object');

			var keys = [
				'post',
				'postPlaintext'
			];

			expect(utils).to.have.keys(keys);
		});
	});
});