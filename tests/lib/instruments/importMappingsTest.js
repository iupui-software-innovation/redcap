'use strict';

const expect = require('chai').expect;
const importMappingsModule = require('../../../lib/instruments/importMappings.js');

const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

describe('instruments#importMappings', function() {
	it('should be a function', function() {
		expect(importMappingsModule).to.be.a('function');
	});

	const importMappings = importMappingsModule(utils);

	it('should return a function', function() {
		expect(importMappings).to.be.a('function');
	});

	it('should provide an error if no values are passed', function(done) {
		importMappings({data:{}}, function(err, res) {
			expect(err).to.not.be.empty;
			expect(res).to.be.empty;
			done();
		});
	});

	describe('should return the number of values updated', function() {
		it('for 1 update', function(done) {
			var data = [{ 
				"arm_num": 1,
				"unique_event_name": "event_1_arm_1",
				"form": "test_followup_survey"
			}]
			importMappings({data: JSON.stringify(data)}, function(err, res) {
				expect(err).to.be.empty;
				expect(res).to.equal(1);
				done();
			});
		});
	});
});