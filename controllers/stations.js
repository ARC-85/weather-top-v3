"use strict";

const logger = require("../utils/logger");
const stationsStore = require("../models/stations-store");
const uuid = require("uuid");
const stationsAnalytics = require("../utils/stations-analytics");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = ", stationId);

    const station = stationsStore.getStation(stationId);
    const currentReading = stationsAnalytics.getCurrentReading(station);
    console.log(currentReading);
    const viewData = {
      title: "Station",
      station: stationsStore.getStation(stationId),
      currentReading: currentReading
    };
    response.render("stations", viewData);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationsStore.removeReading(stationId, readingId);
    response.redirect("/stations/" + stationId);
  },

  addSong(request, response) {
    const playlistId = request.params.id;
    const playlist = playlistStore.getPlaylist(playlistId);
    const newSong = {
      id: uuid.v1(),
      title: request.body.title,
      artist: request.body.artist,
      duration: Number(request.body.duration)
    };
    logger.debug("New Song = ", newSong);
    playlistStore.addSong(playlistId, newSong);
    response.redirect("/playlist/" + playlistId);
  }
};

module.exports = playlist;
