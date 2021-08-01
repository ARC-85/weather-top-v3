"use strict";

const logger = require("../utils/logger");
const stationsStore = require("../models/stations-store");
const uuid = require("uuid");
const stationsAnalytics = require("../utils/stations-analytics");

const stations = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = ", stationId);

    const station = stationsStore.getStation(stationId);
    const weatherType = stationsAnalytics.getWeatherType(station);
    const celsius = stationsAnalytics.getCelsius(station);
    const fahrenheit = stationsAnalytics.getFahrenheit(station);
    const windTemp = stationsAnalytics.getWindChill(station);
    const minimumTemperature = stationsAnalytics.getMinimumTemperature(station);
    const maximumTemperature = stationsAnalytics.getMaximumTemperature(station);
    const temperatureTrend = stationsAnalytics.getTemperatureTrend(station);
    const windBeaufort = stationsAnalytics.getWindBeaufort(station);
    const windDirect = stationsAnalytics.getWindDirection(station);
    const minimumWind = stationsAnalytics.getMinimumWind(station);
    const maximumWind = stationsAnalytics.getMaximumWind(station);
    const windTrend = stationsAnalytics.getWindTrend(station);
    const pressureHpa = stationsAnalytics.getPressureHpa(station);
    const minimumPressure = stationsAnalytics.getMinimumPressure(station);
    const maximumPressure = stationsAnalytics.getMaximumPressure(station);
    const latestReading = stationsAnalytics.getLatestReading(station);
    console.log(minimumTemperature);
    console.log(latestReading);
    const viewData = {
      name: "Station",
      station: stationsStore.getStation(stationId),
      weatherType: weatherType,
      celsius: celsius,
      fahrenheit: fahrenheit,
      windTemp: windTemp,
      minimumTemperature: minimumTemperature,
      maximumTemperature: maximumTemperature,
      temperatureTrend: temperatureTrend,
      windBeaufort: windBeaufort,
      windDirect: windDirect,
      minimumWind: minimumWind,
      maximumWind: maximumWind,
      windTrend: windTrend,
      pressureHpa: pressureHpa,
      minimumPressure: minimumPressure,
      maximumPressure: maximumPressure,
      latestReading: latestReading
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

  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationsStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
      windDirection: Number(request.body.windDirection),
      time: new Date()
    };
    logger.debug("New Reading = ", newReading);
    stationsStore.addReading(stationId, newReading);
    response.redirect("/stations/" + stationId);
  }
};

module.exports = stations;
