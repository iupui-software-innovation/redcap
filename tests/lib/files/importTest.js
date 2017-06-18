'use strict';

const expect = require('chai').expect;
const importInfo = require('../../../lib/files/import.js');

describe('files#import', function() {
	it('should be a function', function() {
		expect(importInfo).to.be.a('function');
	});

	const config = {
		host: 'redcap.uits.iu.edu',
		path: '/api/',
		token: process.env.REDCAP_API_KEY
	}
	const utils = require('../../../lib/utils')(config);

	it('should return a function', function() {
		var importFunc = importInfo(utils);
		expect(importFunc).to.be.a('function');
	});

	it('should import a file', function(done) {
		var importFunc = importInfo(utils);

        var params = {
            record: '1',
            field: 'testfile',
            event: '',
            file: ''
        }
		importFunc(params, function(err, res) {
            console.log(res);
			expect(err).to.be.null;
			expect(res).to.not.be.empty;
			done();
		});
	});
});