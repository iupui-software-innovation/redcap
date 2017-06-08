'use strict';

const expect = require('chai').expect;
const usersModule = require('../../../lib/users');
const utils = require('../../../lib/utils');

context('users', function() {
	describe('module.export', function() {
		it('should be a function', function() {
			expect(usersModule).to.be.a('function');
		});

		describe('constructor', function() {
			it('should return an object', function() {
				expect(usersModule(utils)).to.be.an('object');
			});
		});

		describe('#export', function() {
			it('should be a function', function() {
				expect(usersModule(utils).export).to.be.a('function');
			});
		});
		describe('#import', function() {
			it('should be a function', function() {
				expect(usersModule(utils).import).to.be.a('function');
			});
		});
	});
});
