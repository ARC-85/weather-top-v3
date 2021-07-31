"use strict";

const stationsAnalytics = {
  getWeatherType(station) {
    let weatherType = null;
    const readings = station.readings;
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
    return weatherIcon;
  },
  
  getCelsius(station) {
    let celsius = null;
    if (station.readings.length > 0) {
      celsius = station.readings[station.readings.length - 1].temperature + " Celsius";
    } else {
      celsius = "No readings available.";
    }
    return celsius;
  },
  
  getFahrenheit(station) {
    let fahrenheit = null;
    let fahrenheitTemp = null;
    if (station.readings.length > 0) {
      fahrenheitTemp = station.readings[station.readings.length - 1].temperature * 9 / 5 + 32; 
      fahrenheit = fahrenheitTemp + " Fahrenheit";
    } else {
      fahrenheit = "No readings available.";
    }
    return fahrenheit;
  },

  getMinimumTemperature(station) {
    let minimumTemperature = null;
    if (station.readings.length > 0) {
      minimumTemperature = station.readings[0].temperature;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minimumTemperature) {
          minimumTemperature = "Min Temp: " + station.readings[i].temperature + " Celsius";
        }
      }
    } else {
      minimumTemperature = "No readings available.";
    }
    return minimumTemperature;
  },
  
  getMaximumTemperature(station) {
    let maximumTemperature = null;
    if (station.readings.length > 0) {
      maximumTemperature = station.readings[0].temperature;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maximumTemperature) {
          maximumTemperature = "Max Temp: " + station.readings[i].temperature + " Celsius";
        }
      }
    } else {
      maximumTemperature = "No readings available.";
    }
    return maximumTemperature;
  },
  
  getWindBeaufort(station) {
    let windBeaufort = null;
    const readings = station.readings;
    if (station.readings.length > 0) {
      if (station.readings[station.readings.length - 1].wind <= 1) {
                return "Beaufort 0 (Calm)";
            } else if (station.readings[station.readings.length - 1].wind > 1 && station.readings[station.readings.length - 1].wind <= 5) {
                return "Beaufort 1 (Light Air)";
            } else if (station.readings[station.readings.length - 1].wind > 5 && station.readings[station.readings.length - 1].wind <= 11) {
                return "Beaufort 2 (Light Breeze)";
            } else if (station.readings[station.readings.length - 1].wind > 11 && station.readings[station.readings.length - 1].wind <= 19) {
                return "Beaufort 3 (Gentle Breeze)";
            } else if (station.readings[station.readings.length - 1].wind > 19 && station.readings[station.readings.length - 1].wind <= 28) {
                return "Beaufort 4 (Moderate Breeze)";
            } else if (station.readings[station.readings.length - 1].wind > 28 && station.readings[station.readings.length - 1].wind <= 38) {
                return "Beaufort 5 (Fresh Breeze)";
            } else if (station.readings[station.readings.length - 1].wind > 1 && station.readings[station.readings.length - 1].wind <= 5) {
                return "Beaufort 6 (Strong Breeze)";
            } else if ((currentReading.getWind() > 49) && (currentReading.getWind() <= 61)) {
                return "Beaufort 7 (Near Gale)";
            } else if ((currentReading.getWind() > 61) && (currentReading.getWind() <= 74)) {
                return "Beaufort 8 (Gale)";
            } else if ((currentReading.getWind() > 74) && (currentReading.getWind() <= 88)) {
                return "Beaufort 9 (Severe Gale)";
            } else if ((currentReading.getWind() > 88) && (currentReading.getWind() <= 102)) {
                return "Beaufort 10 (Strong Storm)";
            } else if ((currentReading.getWind() > 102) && (currentReading.getWind() <= 117)) {
                return "Beaufort 11 (Violent Storm)";
            } else
                return "Perfect Storm";
    } else {
      weatherType = "No readings available.";
    }
    return weatherType;
    return weatherIcon;
  },
  
  getPressureHpa(station) {
    let pressureHpa = null;
    if (station.readings.length > 0) {
      pressureHpa = station.readings[station.readings.length - 1].pressure + " hPa";
    } else {
      pressureHpa = "No readings available.";
    }
    return pressureHpa;
  },

  getLatestReading(station) {
    let latestReading = null;
    if (station.readings.length > 0) {
      latestReading = station.readings[station.readings.length - 1].time;
    } else {
      latestReading = "No readings available.";
    }
    return latestReading;
  },
  
  
};

module.exports = stationsAnalytics;
