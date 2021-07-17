"use strict";

const accounts = require("./accounts.js");
const logger = require("../utils/logger");
const stationsStore = require("../models/stations-store");
const uuid = require("uuid");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Stations Dashboard",
      playlists: stationsStore.getUserStations(loggedInUser.id)
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
      title: request.body.title,
      readings: []
    };
    logger.debug("Creating a new Station", newStation);
    stationsStore.addStation(newStation);
    response.redirect("/dashboard");
  }
};

module.exports = dashboard;
