'use strict';

const expect = require ('chai').expect;
const exportModule = require ('../../../lib/fieldNames/exportList.js');
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);

describe ('fieldNames#exportList', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportList = exportModule (utils);
  it ('should return a function', function () {
    expect (exportList).to.be.a ('function');
  });

  it ('should return a list of export/import field names', function (done) {
    exportList (function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.an ('array');
      return done ();
    });
  });

  it ('should return a single name if a field name is given', function (done) {
    exportList ({field: 'record_id'}, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.an ('array');
      expect (res.length).to.equal (1);
      return done ();
    });
  });
});
