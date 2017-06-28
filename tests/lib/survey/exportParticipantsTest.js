'use strict';

const expect = require ('chai').expect;
const exportParticipants = require ('../../../lib/survey/exportParticipants.js');

describe ('survey#exportParticipants', function () {
  it ('should be a function', function () {
    expect (exportParticipants).to.be.a ('function');
  });

  const config = {
    host: 'redcap.uits.iu.edu',
    path: '/api/',
    token: process.env.REDCAP_API_KEY
  };
  const utils = require ('../../../lib/utils') (config);

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
      expect (err).to.be.null;
      expect (res).to.be.an ('array');
      done ();
    });
  });
});