'use strict';

const expect = require  ('chai').expect;
const config = require  ('../../config.js');

const utils = require  ('../../../lib/utils') (config);

const exportModule = require  ('../../../lib/records/export.js');

describe  ('records#export', function  () {
	it  ('should be a function', function  () {
		expect  (exportModule).to.be.a  ('function');
	});

	var exportRecord = exportModule  (utils);
	it  ('should return a function', function  () {
		expect  (exportRecord).to.be.a  ('function');
	});

	it ('should return all records if no options are given', function (done) {
		exportRecord (function (err, res) {
			if  (err)
        return done  (err);
			expect (res).to.be.an ('array').that.is.not.empty;

			return done  ();
		});
	});

	it ('should accept optional parameters', function (done) {
		var params = {
			type: 'flat',
			records: [1, 2]
		}

		exportRecord (params, function (err, res) {
			if  (err)
        return done  (err);
			expect (res).to.be.an ('array').that.is.not.empty;
			expect (res[0]).to.be.an ('object').that.has.property ('record_id').that.equals('1');

			return done  ();
			return;
		});
	});
	it ('should ignore invalid parameters', function (done) {
		var params = {
			type: 'flat',
			foo: 'bar'
		}

		exportRecord (params, function (err, res) {
			if (err)
        return done (err);
			expect (res).to.be.an ('array').that.is.not.empty;

			return done ();
		});
	});
});
