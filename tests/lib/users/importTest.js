/* 
 All tests are working, but this code will be commented
 out to protect overwriting/deleting users. Only use this
 test if you understand the risks associated with it.
 */

/*
'use strict';

const expect = require ('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};
const utils = require ('../../../lib/utils') (config);

const importInfo = require ('../../../lib/users/import.js');

describe ('users#importInfo', function () {
  it ('should be a function', function () {
    expect (importInfo).to.be.a ('function');
  });

  var importFunc = importInfo (utils);

  it ('should return a function', function () {
    expect (importFunc).to.be.a ('function');
  });

  it ('should return project info', function (done) {
    // Use the latest User data from the export method
    var data = [];

    importFunc ({data: data}, function (err, res) {
      expect (err).to.be.null;
      expect (res).to.not.be.null;
      expect (res).to.be.a ('number');
      done ();
    });
  });
});
*/