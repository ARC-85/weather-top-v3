"use strict";

const stationsAnalytics = {
  getWeatherType(station) {
    let weatherType = null;
    if (station.readings.length > 0) {
      if (station.readings[station.readings.length - 1].code === 100) {
        weatherType = "Clear";
      } else if (station.readings[station.readings.length - 1].code === 200) {
        weatherType = "Partial Clouds";
      } else if (station.readings[station.readings.length - 1].code === 300) {
        weatherType = "Cloudy";
      } else if (station.readings[station.readings.length - 1].code === 400) {
        weatherType = "Light Showers";
      } else if (station.readings[station.readings.length - 1].code === 500) {
        weatherType = "Heavy Showers";
      } else if (station.readings[station.readings.length - 1].code === 600) {
        weatherType = "Rain";
      } else if (station.readings[station.readings.length - 1].code === 700) {
        weatherType = "Snow";
      } else if (station.readings[station.readings.length - 1].code === 800) {
        weatherType = "Thunder";
      } else weatherType = "Unrecognised code";
    } else {
      weatherType = "No readings available.";
    }
    return weatherType;
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
    if (station.readings.length > 0) {
      const latestReading = station.readings[x - 1].time;
      return latestReading;
    }
  }
};

module.exports = stationsAnalytics;
