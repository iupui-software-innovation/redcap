'use strict';

const expect = require ('chai').expect;
const deleteInfo = require ('../../../lib/files/delete.js');

require ('./importTest.js');

describe ('files#delete', function () {
  it ('should be a function', function () {
    expect (deleteInfo).to.be.a ('function');
  });

  const config = {
    host: 'redcap.uits.iu.edu',
    path: '/api/',
    token: process.env.REDCAP_API_KEY
  };
  const utils = require ('../../../lib/utils') (config);

  it ('should return a function', function () {
    var deleteFunc = deleteInfo (utils);
    expect (deleteFunc).to.be.a ('function');
  });
  it ('should delete a file', function (done) {
    var deleteFunc = deleteInfo (utils);
    var params = {
      record: '1',
      field: 'testfile',
      event: 'event_1_arm_1'
    };
    deleteFunc (params, function (err, res) {
      if (err) {
        console.log (err);
      }

      expect (err).to.be.null;
      done ();
    });
  });
});
