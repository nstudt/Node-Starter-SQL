const express = require("express");
const app = express();
const passport = require("passport");
const bodyParser = require("body-parser");
//using handlebars hbs with partials. Not npps express-handlebars
const hbs = require("hbs");
//declare your routes here
const index_routes = require("./routes/index_routes");

app.use(passport.initialize());
app.use(passport.session());
// app.use(fileUpload({ preserveExtension: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DO NOT CHANGE THIS - REQUIRED TO RUN BOOTSTRAP LOCALLY
app.use(express.static(__dirname));
//prep handlebars
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));
//usefull utility for handlbars. Call from onclick to javascript function in a view.
hbs.registerHelper("json", function (obj) {
    return new hbs.SafeString(JSON.stringify(obj));
});

app.use("/", index_routes);

module.exports = app;