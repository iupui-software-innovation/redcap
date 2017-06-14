'use strict';

const expect = require('chai').expect;
const importInfoModule = require('../../../lib/instruments/importMappings.js');

const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

describe('instruments#importInfo', function() {
	it('should be a function', function() {
		expect(importInfoModule).to.be.a('function');
	});

	const importInfo = importInfoModule(utils);

	it('should return a function', function() {
		expect(importInfo).to.be.a('function');
	});

	it('should provide an error if no values are passed', function(done) {
		importInfo({data:{}}, function(err, res) {
			expect(err).to.not.be.empty;
			expect(res).to.be.empty;
			done();
		});
	});

	describe('should return the number of values updated', function() {
		it('for 1 update', function(done) {
			var data = { 
				arm_num: 1
			}
			importInfo({data: JSON.stringify(data)}, function(err, res) {
				expect(err).to.be.empty;
				expect(res).to.equal(1);
				done();
			});
		});
	});
});