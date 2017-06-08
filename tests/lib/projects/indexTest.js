'use strict';

const expect = require('chai').expect;
const projectsModule = require('../../../lib/projects');
const utils = require('../../../lib/utils');

context('projects', function() {
	describe('module.export', function() {
		it('should be a function', function() {
			expect(projectsModule).to.be.a('function');
		});

		describe('constructor', function() {
			it('should return an object', function() {
				expect(projectsModule(utils)).to.be.an('object');
			});
		});

		describe('#exportInfo', function() {
			it('should be a function', function() {
				expect(projectsModule(utils).exportInfo).to.be.a('function');
			});
		});
	});
});
