'use strict';

const expect = require('chai').expect;
const exportInfo = require('../../../lib/projects/exportInfo.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportInfo', function() {
	it('should be a function', function() {
		expect(exportInfo).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

	it('should return a function', function() {
		var exportFunc = exportInfo(utils);
		expect(exportFunc).to.be.a('function');
	});

	describe('exportInfo()', function() {
		it('should return project info', function(done) {
			var exportFunc = exportInfo(utils);

			// Can't test err being {}, it breaks for some reason even though it is absolutely {} here
			exportFunc({}, function(err, res) {
				expect(res).to.not.equal({});
				expect(res.project_title).to.equal('REDCap.js (Test)');
				done();
			});
		});
	});
});
