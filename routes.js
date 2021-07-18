~"use strict";

const express = require("express");
const router = express.Router();

const accounts = require("./controllers/accounts.js");
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const stations = require("./controllers/stations.js");
const readings = require("./controllers/readings.js");

router.get("/", accounts.index);
router.get("/login", accounts.login);
router.get("/signup", accounts.signup);
router.get("/logout", accounts.logout);
router.post("/register", accounts.register);
router.post("/authenticate", accounts.authenticate);

router.get("/dashboard", dashboard.index);
router.get("/dashboard/deletestation/:id", dashboard.deleteStation);
router.post("/dashboard/addstation", dashboard.addStation);

router.get("/about", about.index);
router.get("/stations/:id", stations.index);
router.get("/stations/:id/deletereading/:readingid", stations.deleteReading);
router.post("/stations/:id/addreading", stations.addReading);

router.get("/readings/:id/editreading/:readingid", readings.index);
router.post("/readings/:id/updatereading/:readingid", readings.update);

module.exports = router;
