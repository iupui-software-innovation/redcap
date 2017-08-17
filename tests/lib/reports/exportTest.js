'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);

const exportModule = require ('../../../lib/reports/export.js');

describe ('reports#exportReports', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportReports = exportModule (utils);

  it ('should return a function', function () {
    expect (exportReports).to.be.a ('function');
  });

  it ('should give an error if "report_id" is missing', function (done) {
    exportReports ({}, function (err, res) {
      expect (err).to.be.an ('Error');
      return done ();
    });
  });

  it ('should return reports', function (done) {
    exportReports ({report_id: 20794}, function (err, res) {
      if (err)
        return done (err);

      expect (res).to.be.an ('array');
      expect (res[0]).to.have.property ('record_id');
      return done ();
    });
  });
});
