'use strict';

const expect = require ('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
}
const utils = require ('../../../lib/utils') (config);
const deleteModule = require ('../../../lib/records/delete.js');

// Need to make sure import tests run first so we can delete things
require ('./importTest.js');

describe ('records#deleteRecords', function () {
  it ('should be a function', function () {
    expect (deleteModule).to.be.a ('function');
  });

  var deleteRecords = deleteModule (utils);
  it ('should return a function', function () {
    expect (deleteRecords).to.be.a ('function');
  });

  it ('should return an error if record ids are not provided', function (done) {
    deleteRecords ({}, function (error, res) {
      expect (error).to.be.an ('object').that.has.property ('error');
      expect (error.error).to.equal ('Required parameter missing: records');
      expect (res).to.be.null;
      
      done ();
    });
  });

  it ('should return the number of records deleted', function (done) {
    this.timeout (4000);
    var recs = [ "30" ];
    var body = {
      records: recs
    }

    deleteRecords (body, function (error, res) {
      if (error) {
        console.log (error);
      }

      expect (error).to.be.null;
      expect (res).to.be.a ('number').that.equals (1);

      done ();
    });
  });
});
