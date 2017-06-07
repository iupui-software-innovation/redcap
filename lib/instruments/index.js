'use strict';

function Instruments() {
	this.export = require('./export.js');
	this.exportPdf = require('./exportPdf.js');
	this.exportMappings = require('./exportMappings.js');
	this.importMappings = require('./importMappings.js');
}

module.exports = new Instruments();

