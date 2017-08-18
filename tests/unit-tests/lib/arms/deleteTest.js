'use strict';

const expect = require ('chai').expect;
const config = require ('../../../../tests/config.js');
const utils = require ('../../../../lib/utils') (config);
const deleteModule = require ('../../../../lib/arms/delete.js');

require ('./importTest.js');

describe ('arms#delete', function () {
  it ('should be a function', function () {
    expect (deleteModule).to.be.a ('function');
  });

  var deleteArms = deleteModule (utils);

  it ('should return a function', function () {
    expect (deleteArms).to.be.a ('function');
  });

  it ('should give an error if "arms" is missing', function (done) {
    deleteArms ({}, function (err, res) {
      expect (err).to.be.an ('Error');
      return done ();
    });
  });

  it ('should the number of arms deleted', function (done) {
    this.timeout (4000);

    var params = {
      arms: ['3', '4']
    };

    deleteArms (params, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.a ('number');
      return done ();
    });
  });
});
