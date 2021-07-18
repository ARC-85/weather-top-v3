"use strict";

const stationsAnalytics = {

  getNewestReading(station) {
    let newestReading = null;
    if (station.readings.length > 0) {
      newestReading = station.readings[0];
      for (let i = 1; i < playlist.songs.length; i++) {
        if (playlist.songs[i].duration < shortestSong.duration) {
          shortestSong = playlist.songs[i];
        }        
      }
    }
    return shortestSong;
  }
};

module.exports = playlistAnalytics;