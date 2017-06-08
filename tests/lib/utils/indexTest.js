'use strict';

const expect = require('chai').expect;
const utilExport = require('../../../lib/utils');

const baseConfig = {
	host: "redcap.uits.iu.edu",
	path: "/api/",
	token: process.env.REDCAP_API_KEY
}

if (baseConfig.token === "") {
	console.log("Did you set the REDCAP_API_KEY environment variable before running the tests?");
}

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
				expect(1).to.equal(2);
			}
			catch(err) {
				expect(err).to.equal("No API configuration");
			}
		});


		it('should throw an error if no host is given', function() {
			var test = function(apiData) {
				try {
					utilExport(apiData);
					expect(1).to.equal(2);
				}
				catch(err) {
					expect(err).to.equal("No host specified");
				}
			}

			var config = {
				path: baseConfig.path,
				token: baseConfig.token
			}
			test(config);

			var config = {
				host: baseConfig.host,
				path: baseConfig.path,
				token: baseConfig.token
			}
			config.host = "";
			test(config);
		});

		it('should throw an error if no API token is given', function() {
			var config = {
				host: baseConfig.host,
				path: baseConfig.path
			}

			try {
				utilExport(config);
				expect(1).to.equal(2);
			}
			catch(err) {
				expect(err).to.equal("No API token specified");
			}
		});

		it('should return an object', function() {
			expect(utilExport(baseConfig)).to.be.an('object');
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
