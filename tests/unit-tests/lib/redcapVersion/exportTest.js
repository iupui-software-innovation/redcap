'use strict';

const expect = require ('chai').expect;
const config = require ('../../../config.js');
const utils = require ('../../../../lib/utils') (config);

const exportModule = require ('../../../../lib/redcapVersion/export.js');

describe ('redcapVersion#exportRedcapVersion', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportRedcapVersion = exportModule (utils);

  it ('should return a function', function () {
    expect (exportRedcapVersion).to.be.a ('function');
  });

  it ('should return redcap version', function (done) {
    exportRedcapVersion (function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.a ('string');
      return done ();
    });
  });
});
