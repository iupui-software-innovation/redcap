'use strict';

function Users() {
	this.export = require('./export.js');
	this.import = require('./import.js')
}

module.exports = new Users();

