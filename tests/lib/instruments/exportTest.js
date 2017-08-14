'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);
const exportInfo = require ('../../../lib/instruments/export.js');

describe ('instruments#exportInfo', function () {
  it ('should be a function', function () {
    expect (exportInfo).to.be.a ('function');
  });

  it ('should return a function', function () {
    var exportInfoFunc = exportInfo (utils);
    expect (exportInfoFunc).to.be.a ('function');
  });

  it ('should return an array of instruments', function (done) {
    var exportInfoFunc = exportInfo (utils);

    exportInfoFunc (function (err, res) {
      if (err)
        return done (err);

      expect (res).to.be.an ('array');
      return done ();
    });
  });
});
