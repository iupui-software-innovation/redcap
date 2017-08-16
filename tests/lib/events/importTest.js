'use strict';

const expect = require ('chai').expect;
const importModule = require ('../../../lib/events/import.js');

const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);

describe ('events#importEvents', function () {
  it ('should be a function', function () {
    expect (importModule).to.be.a ('function');
  });

  var importEvents = importModule (utils);

  it ('should return a function', function () {
    expect (importEvents).to.be.a ('function');
  });

  it ('should produce an error if data is not defined in params', function (done) {
    importEvents({ override:0 }, function (error, res) {
      expect (error).to.be.an ('object').that.has.property ('error');
      expect (error.error).to.equal ('Required parameter missing: data');
      expect (res).to.be.null;

      done ();
    });
  });

  describe ('should return the number of events imported', function () {
    it ('for one event', function (done) {
      var data = [
        {
          event_name: "import_test_event",
          arm_num: "1",
          unique_event_name: "import_test_event_arm_1"
        }
      ];

      var params = {
        data: data,
        override: 0
      };

      importEvents (params, function (error, res) {
        expect (error).to.be.null;
        expect (res).to.be.a ('number').that.equals(1);

        done ();
      });
    });

    it ('for two events', function (done) {
      var data = [
        {
          event_name: "import_test_event",
          arm_num: "1",
          unique_event_name: "import_test_event_arm_1"
        },
        {
          event_name: "import_test_event2",
          arm_num: "1",
          unique_event_name: "import_test_event2_arm_1"
        }
      ];

      var params = {
        data: data,
        override: 0
      };

      importEvents (params, function (error, res) {
        expect (error).to.be.null;
        expect (res).to.be.a ('number').that.equals(2);

        done ();
      });
    });
  });
});
