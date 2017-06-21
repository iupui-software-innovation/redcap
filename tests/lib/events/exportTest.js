'use strict';

const expect = require ('chai').expect;
const exportModule = require ('../../../lib/events/export.js');

const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);

describe ('events#export', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportEvents = exportModule (utils);
  it ('should return a function', function () {
    expect (exportEvents).to.be.a ('function');
  });

});
