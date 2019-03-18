var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require('./models');
var apiRoutes = require("./app/routes/apiRoutes.js");
var PORT = process.env.PORT || 8080;

//Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.app+json" }));

app.use(express.static("app/public"));

apiRoutes(app, db);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Listening on port: ' + PORT);
    });
});