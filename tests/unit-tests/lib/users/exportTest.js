'use strict';

const expect = require ('chai').expect;
const config = require ('../../../config.js');
const utils = require ('../../../../lib/utils') (config);

const exportInfo = require ('../../../../lib/users/export.js');

describe ('users#exportInfo', function () {
  it ('should be a function', function () {
    expect (exportInfo).to.be.a ('function');
  });

  var exportFunc = exportInfo (utils);

  it ('should return a function', function () {
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return project info', function (done) {
    exportFunc (function (err, res) {
      if (err)
        return done (err);

      expect (res).to.be.an ('array');
      return done ();
    });
  });
});
