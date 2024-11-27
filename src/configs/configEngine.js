const path  = require("path");
const express = require("express");

const configEngine = (app) => {

  // Configs for the engine

  //config teamplate engine
  app.set("views", path.join('./src', "views"));
  app.set("view engine", "ejs");
  // config statis file hiển thị ở public
  app.use(express.static(path.join('./src', "public")));
};

module.exports = configEngine;
