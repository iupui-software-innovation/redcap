'use strict';

const expect = require ('chai').expect;
const surveyModule = require ('../../../lib/survey');
const utils = require ('../../../lib/utils');

context ('survey', function () {
  describe ('module.export', function () {
    it ('should be a function', function () {
      expect (surveyModule).to.be.a ('function');
    });

    describe ('constructor', function () {
      it ('should return an object', function () {
        expect (surveyModule (utils)).to.be.an ('object');
      });
    });

    describe ('#exportLink', function () {
      it ('should be a function', function () {
        expect (surveyModule (utils).exportLink).to.be.a ('function');
      });
    });
    describe ('#exportParticipants', function () {
      it ('should be a function', function () {
        expect (surveyModule (utils).exportParticipants).to.be.a ('function');
      });
    });
    describe ('#exportQueueLink', function () {
      it ('should be a function', function () {
        expect (surveyModule (utils).exportQueueLink).to.be.a ('function');
      });
    });
    describe ('#exportReturnCode', function () {
      it ('should be a function', function () {
        expect (surveyModule (utils).exportReturnCode).to.be.a ('function');
      });
    });
  });
});