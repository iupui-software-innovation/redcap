'use strict';

const expect = require ('chai').expect;
const exportPdf = require ('../../../lib/instruments/exportPdf.js');

const fs = require ('fs');

describe ('instruments#exportPdf', function () {
  it ('should be a function', function () {
    expect (exportPdf).to.be.a ('function');
  });

  const config = {
    host: 'redcap.uits.iu.edu',
    path: '/api/',
    token: process.env.REDCAP_API_KEY
  };
  const utils = require ('../../../lib/utils') (config);

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
      var file = fs.openSync ('exported.pdf', 'w');
      console.log (res);
      fs.writeSync (file, res);
      fs.closeSync (file);

      done ();
    });
  });

});
