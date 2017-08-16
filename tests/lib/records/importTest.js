'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
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
      expect (err).to.be.an ('Error');
      expect (err.message).to.equal ('Required parameter missing: type');
      return done ();
    });
  });

  describe ('should import a record and return number of imported records', function () {
    this.timeout (4000);
    it ('for one record', function (done) {
      var data = [{record:"30", field_name:"test_field", value:0}];

      var opts = {
        data: data,
        type: 'eav',
        overwriteBehavior: 'normal'
      };

      importRecord (opts, function (err, res) {
        if (err)
          return done (err);
        expect (res).to.be.an ('object').that.has.property ('count').that.equals (1);
        return done ();
      });
    });

    it ('for two records', function (done) {
      var data = [
        {
          record_id: "31",
          test_field: 1
        },
        {
          record_id: "32",
          test_field: 1
        }
      ];

      var opts = {
        data: data,
        type: 'flat',
        overwriteBehavior: 'normal',
        returnContent: 'ids'
      };

      importRecord (opts, function (err, res) {
        if (err)
          return done (err);
        expect (res).to.be.an ('array');
        expect (res.length).to.equal (2);
        return done ();
      });
    });
  });
});
