'use strict';

const expect = require ('chai').expect;

const keyChecker = require ('../../../lib/utils/keyCheck.js');

describe ('utils#keyCheck', function () {
  it ('should be a function', function () {
    expect (keyChecker).to.be.a ('function');
  });

  it ('should return an object', function () {
    expect (keyChecker ({},{})).to.be.an ('object');
  });

  it ('should contain "valid", "errmsg", and "keys" properties', function () {
    var keys = [ 'valid', 'errmsg', 'keys' ];
    expect (keyChecker ({}, {})).to.have.keys (keys);
  });

  it ('should return an error if both keySets.required and keySets.optional are undefined', function () {
    var check = keyChecker ();

    expect (check.valid).to.be.false;
    expect (check.errmsg).to.equal ('No keys defined');
  });

  it ('should return an error if keySets.required or keySets.optional exist but are not arrays', function () {
    var req = { required: 'test' };
    var opt = { optional: 'test' };

    var reqCheck = keyChecker ({}, req);
    expect (reqCheck.valid).to.be.false;
    expect (reqCheck.errmsg).to.equal ('Expected required to be an array');

    var optCheck = keyChecker ({}, opt);
    expect (optCheck.valid).to.be.false;
    expect (optCheck.errmsg).to.equal ("Expected optional to be an array");
  });


  it ('should set valid to false if any required are missing', function () {
    var keys = [ 'important' ];
    var keySets = { required: keys };

    var checked = keyChecker ({}, keySets);

    expect (checked.valid).to.be.false;
    expect (checked.errmsg).to.equal ('Required parameter missing: important');
  });

  it ('should return a valid object with all requiredKeys if they were not missing', function () {
    var keys = [ 'important', 'alsoImportant' ];
    var keySets = { required: keys };
    var params = {
      important: 'yes',
      alsoImportant: 'no'
    };

    var checked = keyChecker (params, keySets);

    expect (checked.valid).to.be.true;
    expect (checked.keys).to.have.keys (keys);
  });

  it ('should return a valid object with all of the optionalKeys that were provided in params', function () {
    var keys = [ 'optional', 'moreOptional' ];
    var keySets = { optional: keys };
    var params = {
      optional: 'yes'
    };

    var checked = keyChecker (params, keySets);
    expect (checked.valid).to.be.true;
    expect (checked.keys).to.have.property ('optional').and.to.not.have.property ('moreOptional');
  });

  it ('should ignore extraneous keys in the params object', function () {
    var keys1 = [ '1', '2' ];
    var keys2 = [ 'a', 'b' ];
    var keySets = {
      required: keys1,
      optional: keys2
    };
    var params = {
      1: 1,
      2: 2,
      3: 3,
      a: 'a',
      c: true
    };

    var checked = keyChecker (params, keySets);
    expect (checked.valid).to.be.true;
    expect (checked.keys).to.have.all.keys ('1', '2', 'a').and.to.not.have.any.keys ('3', 'c');
  });
});
