var http = require("http");
const axios = require("axios");

const makeRequest = async (url) => axios.get(url);

const collect = async () => {
  const responses = await axios.all([
    makeRequest("http://test1.infra.getlenses.co.uk/"),
    makeRequest("http://test2.infra.getlenses.co.uk/"),
    makeRequest("http://test3.infra.getlenses.co.uk/"),
  ]);
  return responses.reduce((acc, r) => {
    return acc.concat(r.data);
  }, []);
};

module.exports = collect;
