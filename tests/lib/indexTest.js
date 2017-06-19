'use strict';

const expect = require('chai').expect;

const redcapModule = require('../../lib');

describe('redcap.js', function() {
	it('should be a function', function() {
		expect(redcapModule).to.be.a('function');
	});

	it('should throw an error if token is empty', function() {
		try {
			redcapModule("", {});
			expect.fail;
		}
		catch (err) {
			expect(err).to.be.a('string').that.equals("No API token specified");
		}
	});

	it('should throw an error if token is undefined', function() {
		try {
			redcapModule();
			expect.fail;
		}
		catch (err) {
			expect(err).to.be.a('string').that.equals("No API token specified");
		}
	});

	it('should throw an error if options is undefined', function() {
		try {
			redcapModule("hi");
			expect.fail;
		}
		catch (err) {
			expect(err).to.be.a('string').that.equals("No options provided");
		}
	});

	it('should throw an error if options.host is undefined', function() {
		try {
			redcapModule("hi", {});
			expect.fail;
		}
		catch (err) {
			expect(err).to.be.a('string').that.equals("Host undefined (options.host)");
		}
	});

	it('should throw an error if options.path is undefined', function() {
		try {
			redcapModule("hi", {host:"localhost"});
			expect.fail;
		}
		catch (err) {
			expect(err).to.be.a('string').that.equals("Path undefined (options.path)");
		}
	});

	var redcap = redcapModule("hi", {host:"test", path:"test"});
	it('should return an object with keys', function() {
		var keys = [
			'PACKAGE_VERSION',
            'metadata',
			'redcapVersion',
			'projects',
            'fieldNames',
            'reports',
            'survey'
		];
		expect(redcap).to.be.an('object').that.has.keys(keys);
	});

	describe('redcap#metadata', function() {
		it('should be an object', function() {
			expect(redcap.metadata).to.be.an('object');
		});
	});
	describe('redcap#redcapVersion', function() {
		it('should be an object', function() {
			expect(redcap.redcapVersion).to.be.an('object');
		});
	});
	describe('redcap#projects', function() {
		it('should be an object', function() {
			expect(redcap.projects).to.be.an('object');
		});
	});
	describe('redcap#fieldNames', function() {
		it('should be an object', function() {
			expect(redcap.fieldNames).to.be.an('object');
		});
	});
	describe('redcap#reports', function() {
		it('should be an object', function() {
			expect(redcap.reports).to.be.an('object');
		});
	});
	describe('redcap#survey', function() {
		it('should be an object', function() {
			expect(redcap.survey).to.be.an('object');
		});
	});
});
