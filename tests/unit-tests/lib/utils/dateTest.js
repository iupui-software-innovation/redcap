'use strict';

const expect = require ('chai').expect;
const date = require ('../../../../lib/utils/date.js');

describe ('utils#date', function () {
  describe ('module.export', function () {
    it ('should be a function', function () {
      expect (date).to.be.a ('function');
    });
  });

  describe ('date#prototype.toREDCapString', function () {
    it ('should return a date string', function () {
      var now = new Date (2003, 3, 21);
      expect (now.toREDCapString ()).to.be.a ('string').that.equals ('2003-03-21');
    });
  });
});
