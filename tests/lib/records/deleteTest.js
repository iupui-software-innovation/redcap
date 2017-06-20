'use strict';

const expect = require ('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
}
const utils = require ('../../../lib/utils') (config);
const deleteModule = require ('../../../lib/records/delete.js');

describe ('records#deleteRecords', function () {
  it ('should be a function', function () {
    expect (deleteModule).to.be.a ('function');
  });

  var deleteRecords = deleteModule (utils);
  it ('should return a function', function () {
    expect (deleteRecords).to.be.a ('function');
  });
});
