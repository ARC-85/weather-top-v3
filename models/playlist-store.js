"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const stationsStore = {
  store: new JsonStore("./models/stations-store.json", {
    stationsCollection: []
  }),
  collection: "stationsCollection",

  getAllStations() {
    return this.store.findAll(this.collection);
  },

  getStation(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getUserStations(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },

  addStation(station) {
    this.store.add(this.collection, station);
    this.store.save();
  },

  removeStation(id) {
    const station = this.getStation(id);
    this.store.remove(this.collection, station);
    this.store.save();
  },

  removeAllStations() {
    this.store.removeAll(this.collection);
    this.store.save();
  },

  addReading(id, reading) {
    const station = this.getStation(id);
    station.readings.push(reading);

    let temperature = 0;
    for (let i = 0; i < station.readings.length; i++) {
      temperature += station.readings[i].temperature;
    }

    station.temperature = temperature;
    this.store.save();
  },

  removeReading(id, readingId) {
    const station = this.getStation(id);
    const readings = station.readings;
    _.remove(readings, { id: readingId });
    this.store.save();
  },

  getReading(id, songId) {
    const playList = this.store.findOneBy(this.collection, { id: id });
    const songs = playList.songs.filter(song => song.id == songId);
    return songs[0];
  },

  updateSong(song, updatedSong) {
    song.title = updatedSong.title;
    song.artist = updatedSong.artist;
    song.duration = updatedSong.duration;
    this.store.save();
  }
};

module.exports = playlistStore;
