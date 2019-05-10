const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
app.use("/public", express.static(__dirname + "/public"));/* without the app.use "/public" express.static... the css can not work. */
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "handlebars");
app.use(session({
    name: 'AuthCookie',
    secret: 'This is a random string to create session',
    resave: false,
    saveUninitialized: true
}));
configRoutes(app);
app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000");
});
