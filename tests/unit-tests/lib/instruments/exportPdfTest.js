'use strict';

const expect = require ('chai').expect;
const config = require ('../../../config.js');
const utils = require ('../../../../lib/utils') (config);
const exportPdf = require ('../../../../lib/instruments/exportPdf.js');

const fs = require ('fs');

describe ('instruments#exportPdf', function () {
  it ('should be a function', function () {
    expect (exportPdf).to.be.a ('function');
  });

  it ('should return a function', function () {
    var exportFunc = exportPdf (utils);
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return a PDF file', function (done) {
    this.timeout (4000);
    var exportFunc = exportPdf (utils);
    var params = {
      instrument: '',
      event: '',
      record: '',
    };

    exportFunc (params, function (err, res) {
      if (err)
        return done (err);

      expect (Buffer.isBuffer (res)).to.be.true;

      return done ();
    });
  });

});
