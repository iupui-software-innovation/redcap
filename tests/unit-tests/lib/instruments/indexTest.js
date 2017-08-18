
'use strict';

const expect = require ('chai').expect;
const instrumentsModule = require ('../../../../lib/instruments');
const utils = require ('../../../../lib/utils');

describe ('instruments', function () {
  it ('should be a function', function () {
    expect (instrumentsModule).to.be.a ('function');
  });

  var instruments = instrumentsModule (utils);

  var keys = [
    'export',
    'exportMappings',
    'importMappings',
    'exportPdf'
  ];

  it ('should return an object with keys', function () {
    expect (instruments).to.be.an ('object').that.has.keys (keys);
  });

  describe ('#export', function () {
    it ('should be a function', function () {
      expect (instruments.export).to.be.a ('function');
    });
  });

  describe ('#exportMappings', function () {
    it ('should be a function', function () {
      expect (instruments.exportMappings).to.be.a ('function');
    });
  });

  describe ('#importMappings', function () {
    it ('should be a function', function () {
      expect (instruments.importMappings).to.be.a ('function');
    });
  });

  describe ('#exportPdf', function () {
    it ('should be a function', function () {
      expect (instruments.exportPdf).to.be.a ('function');
    });
  });
});
