'use strict';

const expect = require('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};
const utils = require('../../../lib/utils')(config);

const armsModule = require('../../../lib/arms');

describe('arms', function() {
  it('should be a function', function() {
    expect(armsModule).to.be.a('function');
  });

  var arms = armsModule(utils);

  var keys = [
    'export',
    'import',
    'delete'
  ];

  it('should return an object with keys to methods', function() {
    expect(arms).to.be.an('object').that.has.keys(keys);
  });

  describe('arms#export', function() {
    it('should be a function', function() {
      expect(arms.export).to.be.a('function');
    });
  });
  describe('arms#import', function() {
    it('should be a function', function() {
      expect(arms.import).to.be.a('function');
    });
  });
  describe('arms#delete', function() {
    it('should be a function', function() {
      expect(arms.delete).to.be.a('function');
    });
  });
});