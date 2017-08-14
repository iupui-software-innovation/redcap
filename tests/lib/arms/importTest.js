'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);
const importModule = require ('../../../lib/arms/import.js');

describe ('arms#import', function () {
  it ('should be a function', function () {
    expect (importModule).to.be.a ('function');
  });

  var importArms = importModule (utils);

  it ('should return a function', function () {
    expect (importArms).to.be.a ('function');
  });

  it ('should give an error if "data" is missing', function (done) {
    importArms ({}, function (err, res) {
      expect (err).to.be.an ('object').that.has.property ('error');
      expect (res).to.be.null;
      return done ();
    });
  });

  var data = [
    {
      "arm_num": 1,
      "name": "Drug A"
    },
    {
      "arm_num": 2,
      "name": "Drug B"
    },
    {
      "arm_num": 3,
      "name": "Drug C"
    },
    {
      "arm_num": 4,
      "name": "Drug D"
    }
  ];

  it ('should the number of arms imported', function (done) {
    importArms ({data: data, override: 0}, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.a ('number');
      return done ();
    });
  });
});
