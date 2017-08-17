'use strict';

const expect = require ('chai').expect;
const config = require ('../../config.js');
const utils = require ('../../../lib/utils') (config);
const deleteInfo = require ('../../../lib/files/delete.js');

require ('./exportTest.js');

describe ('files#delete', function () {
  it ('should be a function', function () {
    expect (deleteInfo).to.be.a ('function');
  });

  it ('should return a function', function () {
    var deleteFunc = deleteInfo (utils);
    expect (deleteFunc).to.be.a ('function');
  });
  it ('should delete a file', function (done) {
    var deleteFunc = deleteInfo (utils);
    var params = {
      record: '1',
      field: 'testfile',
      event: 'event_1_arm_1',
      repeat_instance: '1'
    };
    deleteFunc (params, function (err, res) {
      if (err) 
        return done (err);
      expect (err).to.be.null;
      return done ();
    });
  });
});
