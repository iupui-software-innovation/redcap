'use strict';

const expect = require ('chai').expect;
const eventsModule = require ('../../../lib/events');
const utils = require ('../../../lib/utils');

describe ('events', function () {
  it ('should be a function', function () {
    expect (eventsModule).to.be.a ('function');
  });

  var events = eventsModule (utils);
  var keys = [
    'exportEvents'
  ];

  it ('should return an object with keys', function () {
    expect (events).to.be.an ('object').that.has.keys (keys);
  });

  describe ('events#exportEvents', function () {
    it ('should be a function', function () {
      expect (events.exportEvents).to.be.a ('function');
    });
  });
});
