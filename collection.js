var http = require("http");
var str = "";

export function makeRequest(url, callback) {
  var options = {
    host: url,
    path: "/",
  };

  var req = http.request(options, callback).end();
}
