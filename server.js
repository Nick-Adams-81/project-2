const express = require("express")

const session = require("express-session")

const passport =require("./config/passport")

//Setting upour PORT and requiring models for syncing
//=============================================================
const PORT = process.env.PORT || 4000;
const db = require("./models")

// Setting up express app for data parsing
//=============================================================
const app = express()

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// adding the middleware needed for authentication
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session())
// sets up handlebars
// =============================================================


// Routes required
// =============================================================

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)

//syncing our database and logginga message for the user upon success
//===============================================================

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("==> Listening on port %s. Visit http://localhost:%s/ in your browser", PORT, PORT)
  });
});

