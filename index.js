/*
    This software is in the public domain.
    Do what you want with it.
    You can even claim it's yours. Whatever.
    I don't care.

    If you meet me in person, it'd be nice
    if you bought me something if you got any use
    from this.

    Written by parabirb in 2021.
*/

// deps
const express = require("express");
const config = require("./config.json");

// controllers
const indexController = require("./controllers/index");
const postController = require("./controllers/post");
const searchController = require("./controllers/search");

// init the app
const app = new express();
// set the render engine
app.set("view engine", "ejs");

// the various routes
app.get("/", indexController);
app.get("/post", postController);
app.get("/search", searchController);

// set app to listen on the configured port
app.listen(config.port);