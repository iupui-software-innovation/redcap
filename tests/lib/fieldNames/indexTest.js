'use strict';

const expect = require ('chai').expect;
const fieldModule = require ('../../../lib/fieldNames');
const utils = require ('../../../lib/utils');

describe ('fieldNames', function () {
  it ('should be a function', function () {
    expect (fieldModule).to.be.a ('function');
  });

  var fieldNames = fieldModule (utils);

  var keys = [
    'exportList'
  ];

  it ('should return an object with keys', function () {
    expect (fieldNames).to.be.an ('object').that.has.keys (keys);
  });

  describe ('fieldNames#exportList', function () {
    it ('should be a function', function () {
      expect (fieldNames.exportList).to.be.a ('function');
    });
  });
});