'use strict';

const expect = require ('chai').expect;
const exportLink = require ('../../../../lib/survey/exportLink.js');
const config = require ('../../../config.js');
const utils = require ('../../../../lib/utils') (config);
describe ('survey#exportLink', function () {
  it ('should be a function', function () {
    expect (exportLink).to.be.a ('function');
  });

  it ('should return a function', function () {
    var exportFunc = exportLink (utils);
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return a link to the survey', function (done) {
    var exportFunc = exportLink (utils);
    var params = {
      instrument: 'test_followup_survey',
      event: 'event_1_arm_1',
      record: '1',
    };

    exportFunc (params, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.a ('string');
      return done ();
    });
  });
});
