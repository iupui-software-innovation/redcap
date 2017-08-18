'use strict';

const expect = require ('chai').expect;
const exportParticipants = require ('../../../../lib/survey/exportParticipants.js');
const config = require ('../../../config.js');
const utils = require ('../../../../lib/utils') (config);

describe ('survey#exportParticipants', function () {
  it ('should be a function', function () {
    expect (exportParticipants).to.be.a ('function');
  });

  it ('should return a function', function () {
    var exportFunc = exportParticipants (utils);
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return an object with an array of participants', function (done) {
    var exportFunc = exportParticipants (utils);
    var params = {
      instrument: 'effective_transitional_care_checklist',
      event: 'event_1_arm_1'
    };
    exportFunc (params, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.an ('array');
      return done ();
    });
  });
});
