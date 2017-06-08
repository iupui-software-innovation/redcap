'use strict';

const expect = require('chai').expect;
const exportParticipants = require('../../../lib/survey/exportParticipants.js');

// Temporary configuration import - is there a better way?
const baseConfig = require('../config.json');

describe('projects#exportParticipants', function() {
	it('should be a function', function() {
		expect(exportParticipants).to.be.a('function');
	});
});