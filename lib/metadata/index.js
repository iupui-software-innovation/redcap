'use strict';

function Metadata() {
	this.export = require('./export.js');
	this.import = require('./import.js')
}

module.exports = new Metadata();

