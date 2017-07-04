/* 
 When testing import, ALWAYS make a snapshot of the current
 data dictionary before importing to prevent data loss. All
 tests are working, but this code will be commented out to
 protect any data currently in the dictionary.
 */

/*
'use strict';

const expect = require ('chai').expect;
const importInfoModule = require ('../../../lib/metadata/import.js');

const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};

const utils = require ('../../../lib/utils') (config);

describe ('metadata#import', function () {
  it ('should be a function', function () {
    expect (importInfoModule).to.be.a ('function');
  });

  const importInfo = importInfoModule (utils);

  it ('should return a function', function () {
    expect (importInfo).to.be.a ('function');
  });

  it ('should provide an error if no values are passed', function (done) {
    importInfo ({data:{}}, function (err, res) {
      expect (err).to.be.an ('object').that.has.property ('error');
      expect (res).to.be.null;
      done ();
    });
  });

  describe ('should return the number of values updated', function () {
    it ('for 1 update', function (done) {
      // Please put the most recent metadata here when testing this
      var data = [];
      importInfo ({data: data}, function (err, res) {
        console.log (err);
        expect (err).to.be.null;
        expect (res).to.be.a ('number');
        done ();
      });
    });
  });
});
*/