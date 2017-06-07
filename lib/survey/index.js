'use strict';

function Survey() {
	this.exportLink = require('./exportLink.js');
	this.exportParticipants = require('./exportParticipants.js');
	this.exportQueueLink = require('./exportQueueLink.js');
	this.exportReturnCode = require('./exportReturnCode.js');
}

module.exports = new Survey();

