'use strict';

const expect = require ('chai').expect;
const config = require ('../../../config');
const utils = require ('../../../../lib/utils') (config);
const importMappingsModule = require ('../../../../lib/instruments/importMappings.js');

describe ('instruments#importMappings', function () {
  it ('should be a function', function () {
    expect (importMappingsModule).to.be.a ('function');
  });

  const importMappings = importMappingsModule (utils);

  it ('should return a function', function () {
    expect (importMappings).to.be.a ('function');
  });

  it ('should provide an error if no values are passed', function (done) {
    importMappings ({}, function (err, res) {
      expect (err).to.be.an ('Error');
      expect (err.message).to.equal ('Required parameter missing: data');
      return done ();
    });
  });

  describe ('should return the number of values updated', function () {
    it ('for 1 update', function (done) {
      var data = [{
        "arm_num": 1,
        "unique_event_name": "event_1_arm_1",
        "form": "test_followup_survey"
      }];
      importMappings ({data: data}, function (err, res) {
        if (err)
          return done (err);

        expect (res).to.equal (1);
        return done ();
      });
    });
    
    it ('for 2 updates', function (done) {
      var data = [
        {
          "arm_num":1,
          "unique_event_name": "event_1_arm_1",
          "form": "test_followup_survey"
        },
        {
          "arm_num": 1,
          "unique_event_name": "event_1_arm_1",
          "form": "effective_transitional_care_checklist"
        }
      ];

      importMappings ({ data: data}, function (err, res) {
        if (err)
          return done (err);

        expect (res).to.equal (2);
        return done ();
      });
    });
  });
});
