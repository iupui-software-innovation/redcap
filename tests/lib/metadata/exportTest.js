'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
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
    exportMetadata (params, function (err, res) {
      if (err)
        return done (err);

      expect (res).to.be.an ('array');
      return done ();
    });
  });
});
