'use strict';

const expect = require ('chai').expect;
const postExport = require ('../../../lib/utils/post.js');

const baseConfig = require ('../../config.js');

if (baseConfig.token === "") {
  console.log ("Did you set the REDCAP_API_KEY environment variable before running the tests?");
}

describe ('utils#post', function () {
  describe ('module.export', function () {
    it ('should be a function', function () {
      expect (postExport).to.be.a ('function');
    });
  });

  describe ('constructor', function () {
    it ('should throw an error if no configuration is given', function () {
      try {
        postExport ();
        expect.fail;
      }
      catch (err) {
        expect (err).to.equal ("No API configuration");
      }
    });


    var apiDataTest = function (apiData, errorMsg) {
      try {
        postExport (apiData);
        expect.fail;
      }
      catch (err) {
        expect (err).to.equal (errorMsg);
      }
    };

    it ('should throw an error if no host is given', function () {
      var config = {
        path: baseConfig.path,
        token: baseConfig.token
      };
      apiDataTest (config, "No host specified");

      var config = {
        host: "",
        path: baseConfig.path,
        token: baseConfig.token
      };
      apiDataTest (config, "No host specified");
    });

    it ('should throw an error if no API token is given', function () {
      var config = {
        host: baseConfig.host,
        path: baseConfig.path
      };
      apiDataTest (config, "No API token specified");

      var config = {
        host: baseConfig.host,
        path: baseConfig.path,
        token: ""
      };
      apiDataTest (config, "No API token specified");
    });

    it ('should return a function', function () {
      expect (postExport (baseConfig)).to.be.a ('function');
    });
  });

  describe ('post function', function () {
    it ('should give an error if the host refused connection', function (done) {
      var config = {
        host: "localhost",
        token: "notoken"
      };
      var post = postExport (config);
      post ({}, function (error, res) {
        expect (error.errno).to.equal ("ECONNREFUSED");
        expect (res).to.be.null;
        done ();
      });
    });

    it ('should give an error if the token was not valid', function (done) {
      var config = {
        host: baseConfig.host,
        path: baseConfig.path,
        token: "notoken"
      };
      var post = postExport (config);
      post ({}, function (err, res) {
        expect (err).to.be.an ('object').that.has.property ('error');
        done ();
      });
    });

    it ('should give an error if the postData was invalid', function (done) {
      var post = postExport (baseConfig);
      post ({}, function (err, res) {
        expect (err).to.be.an ('object').that.has.property ('error');
        done ();
      });
    });

    it ('should give an error if the API request was bad', function (done) {
      var body = {
        format: 'json',
        returnFormat: 'json'
      };
      var post = postExport (baseConfig);
      post (body, function (err, res) {
        expect (err).to.be.an ('object').that.has.property ('error');
        done ();
      });
    });

    it ('should give the data to a valid API request', function (done) {
      var body = {
        content: 'project',
        format: 'json',
        returnFormat: 'json'
      };
      var post = postExport (baseConfig);
      post (body, function (err, res) {
        expect (err).to.be.null;
        expect (res).to.not.be.null;
        done ();
      });
    });

    // This test breaks stuff and is terrible. It tries to run twice?
    /*
    it ('should give an error if the path was incorrect', function (done) {
      var config = {
        host: baseConfig.host,
        path: "",
        token: "notoken"
      };
      var post = postExport (config);
      post ({}, function (err, res) {
        expect (err).to.not.be.empty;
        done ();
      });
    });
    */
  });
});
