'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}

const utils = require('../../../lib/utils')(config);

const exportModule = require('../../../lib/records/export.js');

describe('records#export', function() {
	it('should be a function', function() {
		expect(exportModule).to.be.a('function');
	});

	var exportRecord = exportModule(utils);
	it('should return a function', function() {
		expect(exportRecord).to.be.a('function');
	});

	it('should generate an erroror if "type" is missing from parameters', function(done) {
		var params = {};

		exportRecord(params, function(error, res) {
			expect(error).to.be.an('object').that.has.property('error');
			done();
		});
	});

	it('should return all records if no options are given', function(done) {
		var params = {type: 'flat'};

		exportRecord(params, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.be.an('array').that.is.not.empty;

			done();
			return;
		});
	});

	it('should accept optional parameters', function(done) {
		var params = {
			type: 'flat',
			records: ['1', '2']
		}

		exportRecord(params, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.be.an('array').that.is.not.empty;
			expect(res[0]).to.be.an('object').that.has.property('record_id').that.equals('2');

			done();
			return;
		});
	});
	it('should ignore invalid parameters', function(done) {
		var params = {
			type: 'flat',
			foo: 'bar'
		}

		exportRecord(params, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.be.an('array').that.is.not.empty;

			done();
			return;
		});
	});
});
