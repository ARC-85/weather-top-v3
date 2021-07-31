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
      if (station.readings[station.readings.length - 1].windSpeed <= 1) {
                windBeaufort = "Beaufort 0 (Calm)";
            } else if ((station.readings[station.readings.length - 1].windSpeed > 1) && (station.readings[station.readings.length - 1].windSpeed <= 5)) {
                windBeaufort = "Beaufort 1 (Light Air)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 5 && station.readings[station.readings.length - 1].windSpeed <= 11) {
                windBeaufort = "Beaufort 2 (Light Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 11 && station.readings[station.readings.length - 1].windSpeed <= 19) {
                windBeaufort = "Beaufort 3 (Gentle Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 19 && station.readings[station.readings.length - 1].windSpeed <= 28) {
                windBeaufort = "Beaufort 4 (Moderate Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 28 && station.readings[station.readings.length - 1].windSpeed <= 38) {
                windBeaufort = "Beaufort 5 (Fresh Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 38 && station.readings[station.readings.length - 1].windSpeed <= 49) {
                windBeaufort = "Beaufort 6 (Strong Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 49 && station.readings[station.readings.length - 1].windSpeed <= 61) {
                windBeaufort = "Beaufort 7 (Near Gale)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 61 && station.readings[station.readings.length - 1].windSpeed <= 74) {
                windBeaufort = "Beaufort 8 (Gale)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 74 && station.readings[station.readings.length - 1].windSpeed <= 88) {
                windBeaufort = "Beaufort 9 (Severe Gale)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 88 && station.readings[station.readings.length - 1].windSpeed <= 102) {
                windBeaufort = "Beaufort 10 (Strong Storm)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 102 && station.readings[station.readings.length - 1].windSpeed <= 117) {
                windBeaufort = "Beaufort 11 (Violent Storm)";
            } else
                windBeaufort = "Perfect Storm";
    } else {
      windBeaufort = "No readings available.";
    }
    return windBeaufort;
  },
  
  getWindDirection(station) {
    let windDirect = null;
    const readings = station.readings;
    if (station.readings.length > 0) {
      if ((station.readings[station.readings.length - 1].windDirection >= 348.75) && (station.readings[station.readings.length - 1].windDirection <= 360.00)) {
                return "North";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 0) && (station.readings[station.readings.length - 1].windDirection < 11.25)) {
                return "North";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 11.25) && (currentReading.getWindDirection() < 33.75)) {
                return "North North East";
            } else if ((currentReading.getWindDirection() >= 33.75) && (currentReading.getWindDirection() < 56.25)) {
                return "North East";
            } else if ((currentReading.getWindDirection() >= 56.25) && (currentReading.getWindDirection() < 78.75)) {
                return "East North East";
            } else if ((currentReading.getWindDirection() >= 78.75) && (currentReading.getWindDirection() < 101.25)) {
                return "East";
            } else if ((currentReading.getWindDirection() >= 101.25) && (currentReading.getWindDirection() < 123.75)) {
                return "East South East";
            } else if ((currentReading.getWindDirection() >= 123.75) && (currentReading.getWindDirection() < 146.25)) {
                return "South East";
            } else if ((currentReading.getWindDirection() >= 146.25) && (currentReading.getWindDirection() < 168.75)) {
                return "South South East";
            } else if ((currentReading.getWindDirection() >= 168.75) && (currentReading.getWindDirection() < 191.25)) {
                return "South";
            } else if ((currentReading.getWindDirection() >= 191.25) && (currentReading.getWindDirection() < 213.75)) {
                return "South South West";
            } else if ((currentReading.getWindDirection() >= 213.75) && (currentReading.getWindDirection() < 236.25)) {
                return "South West";
            } else if ((currentReading.getWindDirection() >= 236.25) && (currentReading.getWindDirection() < 258.75)) {
                return "West South West";
            } else if ((currentReading.getWindDirection() >= 258.75) && (currentReading.getWindDirection() < 281.25)) {
                return "West";
            } else if ((currentReading.getWindDirection() >= 281.25) && (currentReading.getWindDirection() < 303.75)) {
                return "West North West";
            } else if ((currentReading.getWindDirection() >= 303.75) && (currentReading.getWindDirection() < 326.25)) {
                return "North West";
            } else if ((currentReading.getWindDirection() >= 326.25) && (currentReading.getWindDirection() < 348.75)) {
                return "North North West";
            } else
                return "Even Breeze";
    } else {
      windBeaufort = "No readings available.";
    }
    return windBeaufort;
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
