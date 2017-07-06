'use strict';

const expect = require ('chai').expect;
const exportLink = require ('../../../lib/survey/exportLink.js');

describe ('survey#exportLink', function () {
  it ('should be a function', function () {
    expect (exportLink).to.be.a ('function');
  });

  const config = {
    host: 'redcap.uits.iu.edu',
    path: '/api/',
    token: process.env.REDCAP_API_KEY
  };
  const utils = require ('../../../lib/utils') (config);

  it ('should return a function', function () {
    var exportFunc = exportLink (utils);
    expect (exportFunc).to.be.a ('function');
  });

  it ('should return a link to the survey', function (done) {
    var exportFunc = exportLink (utils);
    var params = {
      instrument: 'effective_transitional_care_checklist',
      event: '',
      record: '1',
      repeat_instance: '1'
    };

    exportFunc (params, function (err, res) {
      expect (err).to.be.null;
      expect (res).to.be.a ('string');
      done ();
    });
  });
});
