'use strict';

const expect = require('chai').expect;
const exportQueueLink = require('../../../lib/survey/exportQueueLink.js');

describe('survey#exportQueueLink', function() {
  it('should be a function', function() {
    expect(exportQueueLink).to.be.a('function');
  });

  const config = {
    host: 'redcap.uits.iu.edu',
    path: '/api/',
    token: process.env.REDCAP_API_KEY
  };
  const utils = require('../../../lib/utils')(config);

  it('should return a function', function() {
    var exportFunc = exportQueueLink(utils);
    expect(exportFunc).to.be.a('function');
  });

  it('should return a link to the survey queue', function(done) {
    var exportFunc = exportQueueLink(utils);
    var params = {
      record: '1'
    };
    exportFunc(params, function(err, res) {
      expect(err).to.be.null;
      expect(res).to.be.a('string');
      done();
    });
  });
});