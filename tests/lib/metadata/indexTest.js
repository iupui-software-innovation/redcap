'use strict';

const expect = require('chai').expect;
const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};
const utils = require('../../../lib/utils')(config);

const metadataModule = require('../../../lib/metadata');

describe('metadata', function() {
  it('should be a function', function() {
    expect(metadataModule).to.be.a('function');
  });

  var metadata = metadataModule(utils);

  var keys = [ 'export', 'import' ];

  it('should return an object with keys to methods', function() {
    expect(metadata).to.be.an('object').that.has.keys(keys);
  });

  describe('metadata#export', function() {
    it('should be a function', function() {
      expect(metadata.export).to.be.a('function');
    });
  });
});