'use strict';

require ('./importTest');

const expect = require ('chai').expect;
const deleteModule = require ('../../../lib/events/delete.js');
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);

describe ('events#deleteEvents', function () {
  it ('should be a function', function () {
    expect (deleteModule).to.be.a ('function');
  });

  var deleteEvents = deleteModule (utils);

  it ('should return a function', function () {
    expect (deleteEvents).to.be.a ('function');
  });

  it ('should produce an error if events is not defined in params', function (done) {
    deleteEvents ({}, function (error, res) {
      expect (error).to.be.an ('object').that.has.property ('error');
      expect (error.error).to.equal ('Required parameter missing: events');

      done ();
    });
  });

  it ('should return the number of events deleted', function (done) {
    this.timeout (4000);

    var events = [
      'import_test_event_arm_1',
      'import_test_event2_arm_1'
    ];

    var params = {
      events: events
    };

    deleteEvents (params, function (error, res) {
      if (error) {
        console.log (error);
      }
      expect (error).to.be.null;
      expect (res).to.be.a ('number').that.equals (2);

      done ();
    });
  });
});
