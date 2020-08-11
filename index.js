const express = require("express");
const app = express();
const port = 3000;
const makeRequest = require("./collection");

app.get("/", (req, res) => {
  res.send("Human readable response!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

setInterval(function () {
  console.log("");
  makeRequest("http://test1.infra.getlenses.co.uk/", (res) => {});
}, 30000);
