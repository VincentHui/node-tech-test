const express = require("express");
const app = express();
const port = 3000;
const collect = require("./collection");
const parseJson = require("./jsonParser");
const getSort = require("./sort");
jsonOutput = [];
//start initial population of json output
collect().then((l) => {
  console.log("collected!");
  jsonOutput = l;
});
//eg http://localhost:3000/?catagory=true&priority=true
app.get("/", (req, res) => {
  console.log(`sort type is ${req.query.sort}`);
  res.send(parseJson(jsonOutput.sort(getSort(req.query.sort))));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

setInterval(function () {
  //want to make this a list of promises to resolve and concat into one array and store in memory
  //should be stored in jsonOutput object
  collect().then((l) => {
    console.log("collected!");
    jsonOutput = l;
  });
}, 30000);
