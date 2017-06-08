'use strict';

const expect = require('chai').expect;
const instrumentsModule = require('../../../lib/instruments');
const utils = require('../../../lib/utils');

context('instruments', function() {
	describe('module.export', function() {
		it('should be a function', function() {
			expect(instrumentsModule).to.be.a('function');
		});

		describe('constructor', function() {
			it('should return an object', function() {
				expect(instrumentsModule(utils)).to.be.an('object');
			});
		});

		describe('#export', function() {
			it('should be a function', function() {
				expect(instrumentsModule(utils).export).to.be.a('function');
			});
		});
		describe('#exportMappings', function() {
			it('should be a function', function() {
				expect(instrumentsModule(utils).exportMappings).to.be.a('function');
			});
		});
		describe('#importMappings', function() {
			it('should be a function', function() {
				expect(instrumentsModule(utils).importMappings).to.be.a('function');
			});
		});
		describe('#exportPdf', function() {
			it('should be a function', function() {
				expect(instrumentsModule(utils).exportPdf).to.be.a('function');
			});
		});
	});
});
