"use strict";

const stationsAnalytics = {
  
  getWeatherType(station) {
    let weatherType = null;
        if (readings.size() != 0) {
            Reading currentReading = readings.get(readings.size() - 1);
            if (currentReading.getCode() == 100) {
                return "Clear";
            } else if (currentReading.getCode() == 200) {
                return "Partial Clouds";
            } else if (currentReading.getCode() == 300) {
                return "Cloudy";
            } else if (currentReading.getCode() == 400) {
                return "Light Showers";
            } else if (currentReading.getCode() == 500) {
                return "Heavy Showers";
            } else if (currentReading.getCode() == 600) {
                return "Rain";
            } else if (currentReading.getCode() == 700) {
                return "Snow";
            } else if (currentReading.getCode() == 800) {
                return "Thunder";
            } else
                return "Unrecognised code";
        } else {
            return "No readings available.";
        }
    },

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