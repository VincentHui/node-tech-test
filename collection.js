var http = require("http");

const makeRequest = (url, callback) => http.get(url, callback);
makeRequest("http://test3.infra.getlenses.co.uk/", (res) => {
  res.setEncoding("utf8");
  res.on("data", function (body) {
    console.log(body);
  });
});
module.exports.makeRequest = makeRequest;
