'use strict';

const expect = require ('chai').expect;
const eventsModule = require ('../../../lib/events');
const utils = require ('../../../lib/utils');

describe ('events', function () {
  it ('should be a function', function () {
    expect (eventsModule).to.be.a ('function');
  });

  var events = eventsModule (utils);

  it ('should return an object', function () {
    expect (events).to.be.an ('object');
  });
});
