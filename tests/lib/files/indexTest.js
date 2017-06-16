'use strict';

const expect = require('chai').expect;
const filesModule = require('../../../lib/files');
const utils = require('../../../lib/utils');

describe('files', function() {
	it('should be a function', function() {
		expect(filesModule).to.be.a('function');
	});

	var files = filesModule(utils);

	var keys = [
		'export',
		'import',
		'delete'
	];

	it('should return an object with keys', function() {
		expect(files).to.be.an('object').that.has.keys(keys);
	});

	describe('#export', function() {
		it('should be a function', function() {
			expect(files.export).to.be.a('function');
		});
	});
	
	describe('#import', function() {
		it('should be a function', function() {
			expect(files.import).to.be.a('function');
		});
	});

	describe('#delete', function() {
		it('should be a function', function() {
			expect(files.delete).to.be.a('function');
		});
	});
});
