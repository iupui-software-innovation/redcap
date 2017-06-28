'use strict';

const expect = require ('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};
const utils = require ('../../../lib/utils') (config);

const deleteModule = require ('../../../lib/arms/delete.js');

describe ('arms#delete', function () {
  it ('should be a function', function () {
    expect (deleteModule).to.be.a ('function');
  });

  var deleteArms = deleteModule (utils);

  it ('should return a function', function () {
    expect (deleteArms).to.be.a ('function');
  });

  it ('should give an error if "arms" is missing', function (done) {
    deleteArms ({}, function (error, res) {
      expect (error).to.be.an ('object').that.has.property ('error');
      expect (res).to.be.null;
      done ();
    });
  });

  var params = {
    arms: ['1', '2']
  };
  it ('should the number of arms deleted', function (done) {
    deleteArms (params, function (error, res) {
      expect (error).to.be.null;
      expect (res).to.be.a ('number');
      done ();
    });
  });
});