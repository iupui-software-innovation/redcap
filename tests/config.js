'use strict';

function getToken () {
  var token = process.env.REDCAP_API_KEY;

  if (token === undefined) {
    token = process.env.REDCAP_API_TOKEN;
  }

  if (token === undefined) {
    throw "API token missing from environment variables";
  }

  return token;
}

module.exports = {
  host: "redcap.uits.iu.edu",
  path: "/api/",
  token: getToken ()
}
