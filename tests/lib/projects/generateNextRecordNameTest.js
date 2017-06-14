'use strict';

const expect = require('chai').expect;
const generateModule = require('../../../lib/projects/generateNextRecordName.js');

describe('projects#generateNextRecordName', function() {
	it('should be a function', function() {
		expect(generateModule).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

		var generateName = generateModule(utils);
	it('should return a function', function() {
		expect(generateName).to.be.a('function');
	});

	it('should provide the next record name', function(done) {
		generateName({}, function(error, msg) {
			expect(error).to.be.null;
			expect(msg).to.be.a('number');
			done();
		});
	});
});
