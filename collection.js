var http = require("http");

function makeRequest(url, callback) {
  var options = {
    host: url,
    path: "/",
  };

  var req = http.request(options, callback).end();
}

module.exports.makeRequest = makeRequest;
