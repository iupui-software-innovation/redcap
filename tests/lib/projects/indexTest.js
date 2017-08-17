'use strict';

const expect = require ('chai').expect;
const projectsModule = require ('../../../lib/projects');
const utils = require ('../../../lib/utils');

describe ('projects', function () {
  it ('should be a function', function () {
    expect (projectsModule).to.be.a ('function');
  });

  var projects = projectsModule (utils);

  var keys = [
    'export',
    'import',
    'generateNextRecordName'
  ];

  it ('should return an object with keys', function () {
    expect (projects).to.be.an ('object').that.has.keys (keys);
  });

  describe ('#exportInfo', function () {
    it ('should be a function', function () {
      expect (projects.export).to.be.a ('function');
    });
  });

  describe ('#importInfo', function () {
    it ('should be a function', function () {
      expect (projects.import).to.be.a ('function');
    });
  });

  describe ('#generateNextRecordName', function () {
    it ('should be a function', function () {
      expect (projects.generateNextRecordName).to.be.a ('function');
    });
  });
});
