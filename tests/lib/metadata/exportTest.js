'use strict';

const expect = require ('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};
const utils = require ('../../../lib/utils') (config);

const exportModule = require ('../../../lib/metadata/export.js');

describe ('metadata#export', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportMetadata = exportModule (utils);

  it ('should return a function', function () {
    expect (exportMetadata).to.be.a ('function');
  });

  var params = {
    forms: ['test_followup_survey'],
    fields: ['testfile']
  };
  it ('should return metadata', function (done) {
    exportMetadata (params, function (error, res) {
      console.log(res);
      expect (error).to.be.null;
      expect (res).to.not.be.null;
      expect (res).to.be.an ('array').of.length ('1');
      done ();
    });
  });
});