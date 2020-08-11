const express = require("express");
const app = express();
const port = 3000;
const makeRequest = require("./collection");

jsonOutput = [];

app.get("/", (req, res) => {
  res.send("Human readable response!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

setInterval(function () {
  //want to make this a list of promises to resolve and concat into one array and store in memory
  //should be stored in jsonOutput object
  makeRequest("http://test1.infra.getlenses.co.uk/", (res) => {});
  makeRequest("http://test2.infra.getlenses.co.uk/", (res) => {});
  makeRequest("http://test3.infra.getlenses.co.uk/", (res) => {});
}, 30000);
