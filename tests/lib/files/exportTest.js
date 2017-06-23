'use strict';

const expect = require('chai').expect;
const exportInfo = require('../../../lib/files/export.js');

describe('files#export', function() {
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

	it('should return a file', function(done) {
		var exportFunc = exportInfo(utils);

        var params = {
            record: '1',
            field: 'testfile',
            event: 'event_1_arm_1',
			directory: '',
            repeat_instance: ''
        }
		exportFunc(params, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.not.be.null;
			done();
		});
	});
});