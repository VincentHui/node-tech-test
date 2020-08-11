var http = require("http");
const axios = require("axios");

const makeRequest = async (url) => axios.get(url);
(async () => {
  const response = await makeRequest("http://test3.infra.getlenses.co.uk/");
  console.log(response.data);
})();

// console.log(response);
module.exports.makeRequest = makeRequest;
