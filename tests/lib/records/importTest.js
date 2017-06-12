'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_TOKEN
};
const utils = require('../../../lib/utils')(config);

const importModule = require('../../../lib/records/import.js');

describe('records#import', function() {
	it('should be a function', function() {
		expect(importModule).to.be.a('function');
	});

	var importRecord = importModule(utils);
	it('should return a function', function() {
		expect(importRecord).to.be.a('function');
	});

	it('should generate an error if "type" is missing from parameters', function(done) {
		var params = {
			overwriteBehavior: 'normal',
			data: {}
		}
		importRecord(params, function(err, res) {
			expect(err).to.be.an('object').that.has.property('error').that.equals('Required parameter missing: type');
			expect(res).to.be.empty;
			done();
		});
	});

	it('should generate an error if "overwriteBehavior" is missing from parameters', function(done) {
		var params = {
			type: 'flat',
			data: {}
		}
		importRecord(params, function(err, res) {
			expect(err).to.be.an('object').that.has.property('error').that.equals('Required parameter missing: overwriteBehavior');
			expect(res).to.be.empty;
			done();
		});
	});

	it('should import a record and return number of imported records', function(done) {
		console.log('Not implemented yet');
		done();
	});
});
