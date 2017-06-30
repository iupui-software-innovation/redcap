'use strict';

const expect = require ('chai').expect;
const utils = require ('../../../lib/utils');
const recordsModule = require ('../../../lib/records');

describe ('records', function () {
  it ('should be a function', function () {
    expect (recordsModule).to.be.a ('function');
  });

  var keys = [
    'exportRecords',
    'importRecords',
    'deleteRecords'
  ];

  var records = recordsModule (utils);
  it ('should return an object with keys', function () {
    expect (records).to.be.an ('object').that.has.keys (keys);
  });

  it ('exportRecords should be a function', function () {
    expect (records.exportRecords).to.be.a ('function');
  });

  it ('importRecords should be a function', function () {
    expect (records.importRecords).to.be.a ('function');
  });

  it ('deleteRecords should be a function', function () {
    expect (records.deleteRecords).to.be.a ('function');
  });
});
