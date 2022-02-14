
require("dotenv/config");

require("./db");


const express = require("express");
const hbs = require("hbs");

const app = express();

require("./config")(app);


app.locals.appTitle = `Backend Project`;


// 👇 Start handling routes here
require('./routes')(app)



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
