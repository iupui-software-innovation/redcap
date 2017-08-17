'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);
const generateModule = require ('../../../lib/projects/generateNextRecordName.js');

describe ('projects#generateNextRecordName', function () {
  it ('should be a function', function () {
    expect (generateModule).to.be.a ('function');
  });

  var generateName = generateModule (utils);
  it ('should return a function', function () {
    expect (generateName).to.be.a ('function');
  });

  it ('should provide the next record name', function (done) {
    generateName (function (err, msg) {
      if (err)
        return done (err);
      expect (msg).to.be.a ('number');
      return done ();
    });
  });
});
