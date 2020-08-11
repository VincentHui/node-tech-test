var http = require("http");
var str = "";

var options = {
  host: "http://www.test1.infra.getlenses.co.uk/",
  path: "/",
};

callback = function (response) {
  response.on("data", function (chunk) {
    str += chunk;
  });

  response.on("end", function () {
    console.log(str);
  });
};

var req = http.request(options, callback).end();

// These just return undefined and empty
console.log(req.data);
console.log(str);
