'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);
const exportMappings = require ('../../../lib/instruments/exportMappings.js');

describe ('instruments#exportMappings', function () {
  it ('should be a function', function () {
    expect (exportMappings).to.be.a ('function');
  });

  it ('should return a function', function () {
    var exportFunc = exportMappings (utils);
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return an array of mappings', function (done) {
    var exportFunc = exportMappings (utils);
    var params = {
      arms: [1]
    };
    exportFunc (params, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.an ('array');
      return done ();
    });
  });
});
