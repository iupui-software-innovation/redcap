'use strict';

const expect = require ('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};
const utils = require ('../../../lib/utils')(config);

const importModule = require('../../../lib/records/import.js');

describe ('records#import', function () {
  it ('should be a function', function () {
    expect (importModule).to.be.a ('function');
  });

  var importRecord = importModule (utils);
  it ('should return a function', function () {
    expect (importRecord).to.be.a ('function');
  });

  it ('should generate an error if "type" is missing from parameters', function (done) {
    var params = {
      overwriteBehavior: 'normal',
      data: {}
    }
    importRecord (params, function(err, res) {
      expect (err).to.be.an ('object').that.has.property ('error').that.equals ('Required parameter missing: type');
      expect (res).to.be.null;
      done ();
    });
  });

  it ('should generate an error if "overwriteBehavior" is missing from parameters', function (done) {
    var params = {
      type: 'flat',
      data: {}
    }
    importRecord (params, function (err, res) {
      expect (err).to.be.an ('object').that.has.property ('error').that.equals ('Required parameter missing: overwriteBehavior');
      expect (res).to.be.null;
      done ();
    });
  });

  describe ('should import a record and return number of imported records', function () {
    it ('for one record', function (done) {
      var data = JSON.stringify ([{record:"1", field_name:"does_the_practice_monitor", value:0}])

      var opts = {
        data: data,
        type: 'eav',
        overwriteBehavior: 'normal'
      };

      importRecord (opts, function (error, res) {
        expect (error).to.be.null;
        expect (res).to.be.an ('object').that.has.property ('count').that.equals (1);
        done ();
      });
    });

    it ('for two records', function (done) {
      var data = JSON.stringify ([
        {
          record_id: "1",
          does_the_practice_monitor:1,
          does_the_practice_schedule:1
        },
        {
          record_id: "2",
          does_the_practice_monitor:0,
          does_the_practice_schedule:0
        }
      ]);

      var opts = {
        data: data,
        type: 'flat',
        overwriteBehavior: 'normal',
        returnContent: 'ids'
      };

      importRecord (opts, function (error, res) {
        expect (error).to.be.null;
        expect (res).to.be.an ('array');
        expect (res.length).to.equal (2);
        done ();
      });
    });
  });
});
