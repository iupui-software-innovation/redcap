'use strict';

const expect = require ('chai').expect;
const exportReturnCode = require ('../../../../lib/survey/exportReturnCode.js');
const config = require ('../../../config.js');
const utils = require ('../../../../lib/utils') (config);

describe ('survey#exportReturnCode', function () {
  it ('should be a function', function () {
    expect (exportReturnCode).to.be.a ('function');
  });

  it ('should return a function', function () {
    var exportFunc = exportReturnCode (utils);
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return a return code', function (done) {
    var exportFunc = exportReturnCode (utils);
    var params = {
      instrument: 'effective_transitional_care_checklist',
      event: 'event_1_arm_1',
      record: '1',
      repeat_instance: '1'
    };
    exportFunc (params, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.a ('string');
      return done ();
    });
  });
});
