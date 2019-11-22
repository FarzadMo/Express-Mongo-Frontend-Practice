var express = require("express");
var mongojs = require("mongojs");

var app = express();

app.use(express.static("public"));

var databaseUrl = "zoo";
var collesctions = ["animals"];

var db = mongojs(databaseUrl, collesctions);

db.on("error", function(error) {
  console.log(error);
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(3000, function() {
  console.log("app is listening on port 3000");
});
