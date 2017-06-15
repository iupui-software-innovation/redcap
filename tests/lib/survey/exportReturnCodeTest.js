'use strict';

const expect = require('chai').expect;
const exportReturnCode = require('../../../lib/survey/exportReturnCode.js');

describe('survey#exportReturnCode', function() {
	it('should be a function', function() {
		expect(exportReturnCode).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

	it('should return a function', function() {
		var exportFunc = exportReturnCode(utils);
		expect(exportFunc).to.be.a('function');
	});

	it('should return a return code', function(done) {
		var exportFunc = exportReturnCode(utils);
		var params = {
			instrument: 'effective_transitional_care_checklist',
			event: '',
			record: '1'
		}
		exportFunc(params, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.be.a('string');
			done();
		});
	});
});