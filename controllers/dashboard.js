"use strict";

const accounts = require("./accounts.js");
const logger = require("../utils/logger");
const stationsStore = require("../models/stations-store");
const uuid = require("uuid");
const stationsAnalytics = require("../utils/stations-analytics");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const stations = stationsStore.getUserStations(loggedInUser.id);
       
    const viewData = {
      title: "Stations Dashboard",
      stations: stationsStore.getUserStations(loggedInUser.id),
      
      
    };
    logger.info("about to render", stationsStore.getAllStations());
    response.render("dashboard", viewData);
  },

  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationsStore.removeStation(stationId);
    response.redirect("/dashboard");
  },

  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      name: request.body.name,
      readings: []
    };
    logger.debug("Creating a new Station", newStation);
    stationsStore.addStation(newStation);
    response.redirect("/dashboard");
  }
};

module.exports = dashboard;
