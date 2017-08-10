'use strict';

const expect = require ('chai').expect;
const utilExport = require ('../../../lib/utils')

describe ('utils', function () {
	describe ('module.export', function () {
		it ('should be a function', function () {
			expect (utilExport).to.be.a ('function');
		});

		var config = {
			host: "test",
			path: "test",
			token: "test"
		}
		var utils = utilExport (config);

		it ('should return an object with keys to utility functions', function () {
			expect (utils).to.be.an ('object');

			var keys = [
				'post',
				'keyCheck',
				'postFileUpload',
			];

			expect (utils).to.have.keys (keys);
		});

		describe ('#post', function () {
			it ('should be a function', function () {
				expect (utils.post).to.be.a ('function');
			});
		});
    describe ('#postFileUpload', function () {
      it ('should be a function', function () {
        expect (utils.postFileUpload).to.be.a ('function');
      });
    });
		describe ('#keyCheck', function () {
			it ('should be a function', function () {
				expect (utils.keyCheck).to.be.a ('function');
			});
		});
    describe ('Date.prototype.toREDCapString', function () {
      it ('should be a function', function () {
        expect (Date.prototype.toREDCapString).to.be.a ('function');
      });
    });
	});
});
