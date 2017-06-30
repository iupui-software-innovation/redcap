'use strict';

const expect = require ('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};
const utils = require ('../../../lib/utils') (config);

const exportModule = require ('../../../lib/redcapVersion/export.js');

describe ('redcapVersion#exportRedcapVersion', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportRedcapVersion = exportModule (utils);

  it ('should return a function', function () {
    expect (exportRedcapVersion).to.be.a ('function');
  });

  it ('should return redcap version', function (done) {
    exportRedcapVersion (null, function (error, res) {
      expect (error).to.be.null;
      expect (res).to.not.be.null;
      expect (res).to.be.a ('string');
      done ();
    });
  });
});