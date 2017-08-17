'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
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
    deleteRecords ({}, function (err, res) {
      expect (err).to.be.an ('Error');
      expect (err.message).to.equal ('Required parameter missing: records');
      
      return done ();
    });
  });

  it ('should return the number of records deleted', function (done) {
    this.timeout (4000);
    var recs = [ "30" ];
    var body = {
      records: recs
    }

    deleteRecords (body, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.a ('number').that.equals (1);

      return done ();
    });
  });
});
