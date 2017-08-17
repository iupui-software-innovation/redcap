/* 
 When testing import, ALWAYS make a snapshot of the current
 data dictionary before importing to prevent data loss.
 */

'use strict';

const expect = require ('chai').expect;
const importInfoModule = require ('../../../lib/metadata/import.js');

require ('./exportTest.js');

const config = require ('../../config.js');

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
    importInfo ({}, function (err, res) {
      expect (err).to.be.an ('Error');
      return done ();
    });
  });

  it ('should return the number of values updated', function (done) {
    const fs = require ('fs');
    var data = JSON.parse (fs.readFileSync ('./metadata.txt'));
    expect (data).to.be.an ('array');

    importInfo ({data: data}, function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.a ('number');
      return done ();
    });
  });
});
