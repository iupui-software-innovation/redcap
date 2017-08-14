'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);
const exportInfo = require ('../../../lib/projects/exportInfo.js');

describe ('projects#exportInfo', function () {
  it ('should be a function', function () {
    expect (exportInfo).to.be.a ('function');
  });

  it ('should return a function', function () {
    var exportFunc = exportInfo (utils);
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return project info', function (done) {
    var exportFunc = exportInfo (utils);

    exportFunc (function (err, res) {
      if (err)
        return done (err);
      expect (res.project_title).to.equal ('REDCap.js (Test)');
      return done ();
    });
  });
});
