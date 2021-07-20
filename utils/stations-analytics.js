"use strict";

const stationsAnalytics = {

  getMinimumTemperature(station) {
    let minimumTemperature = null;
    if (station.readings.length > 0) {
      minimumTemperature = station.readings[0].temperature;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minimumTemperature) {
          minimumTemperature = station.readings[i].temperature;
        }        
      }
    }
    return minimumTemperature;
  },
  
  getLatestReading(station) {
    let x = station.readings.length;
    const latestReading = station.readings[x-1].time;
    return latestReading;
  }

};

module.exports = stationsAnalytics;